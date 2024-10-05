# Crypto[2024-6]
## Quantum Complexity for Discrete Logarithms and Related Problems.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#quantum-complexity-for-discrete-logarithms-and-related-problems)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#quantum-complexity-for-discrete-logarithms-and-related-problems)
### Authors
* Minki Hhan, KIAS, Seoul, South Korea
* Takashi Yamakawa, NTT Social Informatics Laboratories, Minato-ku, Japan
* Aaram Yun, Ewha Womans University, Seoul, South Korea
### Abstract
> This paper studies the quantum computational complexity of the discrete logarithm (DL) and related group-theoretic problems in the context of “generic algorithms”—that is, algorithms that do not exploit any properties of the group encoding.
> 
> We establish the quantum generic group model and hybrid classical-quantum generic group model as quantum and hybrid analogs of their classical counterpart. This model counts the number of group operations of the underlying cyclic group \(\mathcal {G}\) as a complexity measure. Shor’s algorithm for the discrete logarithm problem and related algorithms can be described in this model and make \(O(\log |\mathcal {G}|)\) group operations in their basic form. We show the quantum complexity lower bounds and (almost) matching algorithms of the discrete logarithm and related problems in these models.
> 
> We prove that any quantum DL algorithm in the quantum generic group model must make \(\varOmega (\log |\mathcal G|)\) depth of group operation queries. This shows that Shor’s algorithm that makes \(O(\log |\mathcal G|)\) group operations is asymptotically optimal among the generic quantum algorithms, even considering parallel algorithms.
> 
> We observe that some (known) variations of Shor’s algorithm can take advantage of classical computations to reduce the number and depth of quantum group operations. We show that these variants are optimal among generic hybrid algorithms up to constant multiplicative factors: Any generic hybrid quantum-classical DL algorithm with a total number of (classical or quantum) group operations Q must make \(\varOmega (\log |\mathcal G|/\log Q)\) quantum group operations of depth \(\varOmega (\log \log |\mathcal G| - \log \log Q)\).
> 
> When the quantum memory can only store t group elements and use quantum random access classical memory (QRACM) of r group elements, any generic hybrid quantum-classical algorithm must make either \(\varOmega (\sqrt{|\mathcal G|})\) group operation queries in total or \(\varOmega (\log |\mathcal G|/\log (tr))\) quantum group operation queries. In particular, classical queries cannot reduce the number of quantum queries beyond \(\varOmega (\log |\mathcal G|/\log (tr))\).
> 
> As a side contribution, we show a multiple discrete logarithm problem admits a better algorithm than solving each instance one by one, refuting a strong form of the quantum annoying property suggested in the context of password-authenticated key exchange protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_1](https://doi.org/10.1007/978-3-031-68391-6_1)
## Is ML-Based Cryptanalysis Inherently Limited? Simulating Cryptographic Adversaries via Gradient-Based Methods.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#is-ml-based-cryptanalysis-inherently-limited-simulating-cryptographic-adversaries-via-gradient-based-methods)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#is-ml-based-cryptanalysis-inherently-limited-simulating-cryptographic-adversaries-via-gradient-based-methods)
### Authors
* Avital Shafran, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
* Eran Malach, Kempner Institute for the Study of Natural and Artificial Intelligence, Harvard University, MA, USA
* Thomas Ristenpart, Department of Computer Science, Cornell Tech, New York, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
### Abstract
> Given the recent progress in machine learning (ML), the cryptography community has started exploring the applicability of ML methods to the design of new cryptanalytic approaches. While current empirical results show promise, the extent to which such methods may outperform classical cryptanalytic approaches is still somewhat unclear.
> 
> In this work, we initiate exploration of the theory of ML-based cryptanalytic techniques, in particular providing new results towards understanding whether they are fundamentally limited compared to traditional approaches. Whereas most classic cryptanalysis crucially relies on directly processing individual samples (e.g., plaintext-ciphertext pairs), modern ML methods thus far only interact with samples via gradient-based computations that average a loss function over all samples. It is, therefore, conceivable that such gradient-based methods are inherently weaker than classical approaches.
> 
> We introduce a unifying framework for capturing both “sample-based” adversaries that are provided with direct access to individual samples and “gradient-based” ones that are restricted to issuing gradient-based queries that are averaged over all given samples via a loss function. Within our framework, we establish a general feasibility result showing that any sample-based adversary can be simulated by a seemingly-weaker gradient-based one. Moreover, the simulation exhibits a nearly optimal overhead in terms of the gradient-based simulator’s running time. Finally, we extend and refine our simulation technique to construct a gradient-based simulator that is fully parallelizable (crucial for avoiding an undesirable overhead for parallelizable cryptanalytic tasks), which is then used to construct a gradient-based simulator that executes the particular and highly useful gradient-descent method.
> 
> Taken together, although the extent to which ML methods may outperform classical cryptanalytic approaches is still somewhat unclear, our results indicate that such gradient-based methods are not inherently limited by their seemingly restricted access to the provided samples.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_2](https://doi.org/10.1007/978-3-031-68391-6_2)
## Quantum Lattice Enumeration in Limited Depth.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#quantum-lattice-enumeration-in-limited-depth)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#quantum-lattice-enumeration-in-limited-depth)
### Authors
* Nina Bindel, SandboxAQ, Palo Alto, CA, USA
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* Marcel Tiepelt, KASTEL, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Fernando Virdia, NOVA LINCS, Univerisdade NOVA de Lisboa, Lisbon, Portugal
### Abstract
> In 2018, Aono et al. (ASIACRYPT 2018) proposed to use quantum backtracking algorithms (Montanaro, TOC 2018; Ambainis and Kokainis, STOC 2017) to speedup lattice point enumeration. Quantum lattice sieving algorithms had already been proposed (Laarhoven et al., PQCRYPTO 2013), being shown to provide an asymptotic speedup over classical counterparts, but also to lose competitiveness at dimensions relevant to cryptography if practical considerations on quantum computer architecture were taken into account (Albrecht et al., ASIACRYPT 2020). Aono et al.’s work argued that quantum walk speedups can be applied to lattice enumeration, achieving at least a quadratic asymptotic speedup à la Grover search while not requiring exponential amounts of quantum accessible classical memory, as it is the case for sieving. In this work, we explore how to lower bound the cost of using Aono et al.’s techniques on lattice enumeration with extreme cylinder pruning, assuming a limit to the maximum depth that a quantum computation can achieve without decohering, with the objective of better understanding the practical applicability of quantum backtracking in lattice cryptanalysis.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_3](https://doi.org/10.1007/978-3-031-68391-6_3)
## Space-Efficient and Noise-Robust Quantum Factoring.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#space-efficient-and-noise-robust-quantum-factoring)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#space-efficient-and-noise-robust-quantum-factoring)
### Authors
* Seyoon Ragavan, MIT CSAIL, Cambridge, USA
* Vinod Vaikuntanathan, MIT CSAIL, Cambridge, USA
### Abstract
> We provide two improvements to Regev’s quantum factoring algorithm (arXiv:2308.06572), addressing its space efficiency and its noise-tolerance.
> 
> Our first contribution is to improve the quantum space efficiency of Regev’s algorithm while keeping the circuit size the same. Our main result constructs a quantum factoring circuit using \(O(n \log n)\) qubits and \(O(n^{3/2} \log n)\) gates. We achieve the best of Shor and Regev (upto a logarithmic factor in the space complexity): on the one hand, Regev’s circuit requires \(O(n^{3/2})\) qubits and \(O(n^{3/2} \log n)\) gates, while Shor’s circuit requires \(O(n^2 \log n)\) gates but only O(n) qubits. As with Regev, to factor an n-bit integer N, we run our circuit independently \(\approx \sqrt{n}\) times and apply Regev’s classical postprocessing procedure.
> 
> Our optimization is achieved by implementing efficient and reversible exponentiation with Fibonacci numbers in the exponent, rather than the usual powers of 2, adapting work by Kaliski (arXiv:1711.02491) from the classical reversible setting to the quantum setting. This technique also allows us to perform quantum modular exponentiation that is efficient in both space and size without requiring significant precomputation, a result that may be useful for other quantum algorithms. A key ingredient of our exponentiation implementation is an efficient circuit for a function resembling in-place quantum-quantum modular multiplication. This implementation works with only black-box access to any quantum circuit for out-of-place modular multiplication, which we believe is yet another result of potentially broader interest.
> 
> Our second contribution is to show that Regev’s classical postprocessing procedure can be modified to tolerate a constant fraction of the quantum circuit runs being corrupted by errors. In contrast, Regev’s analysis of his classical postprocessing procedure requires all \(\approx \sqrt{n}\) runs to be successful. In a nutshell, we achieve this using lattice reduction techniques to detect and filter out corrupt samples.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_4](https://doi.org/10.1007/978-3-031-68391-6_4)
## CryptAttackTester: high-assurance attack analysis.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#cryptattacktester-high-assurance-attack-analysis)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#cryptattacktester-high-assurance-attack-analysis)
### Authors
* Daniel J. Bernstein, University of Illinois at Chicago, Chicago, USA
* Daniel J. Bernstein, Ruhr University Bochum, Bochum, Germany
* Daniel J. Bernstein, Academia Sinica, Taipei, Taiwan
* Tung Chou, Academia Sinica, Taipei, Taiwan
### Abstract
> Quantitative analyses of the costs of cryptographic attack algorithms play a central role in comparing cryptosystems, guiding the search for improved attacks, and deciding which cryptosystems to standardize. Unfortunately, these analyses often turn out to be wrong. Sometimes errors are not caught until years later.
> 
> This paper introduces CryptAttackTester (CAT), a software framework for high-assurance quantification of attack effectiveness. CAT enforces complete definitions of attack algorithms all the way down through the model of computation, enforces complete definitions of probability predictions and cost predictions all the way down through the cost metric, and systematically tests the predictions on small-scale inputs.
> 
> For example, CAT gives a fully defined meaning to the statement “the median cost of brute-force search for an AES-128 key is under \(2^{141.89}\) bit operations”, and provides clear, auditable reasons to believe that the statement is correct. This does not rule out all possible analysis errors, but with CAT it is no longer possible for bugs to hide inside ambiguous or untested security-level claims. The paper gives various examples of errors in the literature that survived typical informal testing practices and that would have been caught if CAT-enforced links had been in place.
> 
> As an important case study, the bulk of the current CAT release consists of full definitions of a broad spectrum of algorithms for information-set decoding (ISD), along with cost/probability predictions for each algorithm. ISD is the top attack strategy against the McEliece cryptosystem. The predictions cover interactions between (1) high-level search strategies from Prange, Lee–Brickell, Leon, Stern, Dumer, May–Meurer–Thomae, and Becker–Joux–May–Meurer; (2) random walks from Omura, Canteaut–Chabaud, Canteaut–Sendrier, and Bernstein–Lange–Peters; and (3) speedups in core subroutines such as linear algebra and sorting. The predictions also account for various attack overheads that were omitted from previous analyses. These gaps add up to roughly 10 bits, depending on parameters. CAT’s tests catch much smaller errors than this.
> 
> The cost metric selected in CAT has a very simple definition, is a lower bound for the price-performance ratio of non-quantum special-purpose hardware (although the bound is loose for attacks bottlenecked by long-distance communication), and allows many optimization efforts to be shared with the design of cryptographic circuits.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_5](https://doi.org/10.1007/978-3-031-68391-6_5)
## Not Just Regular Decoding: Asymptotics and Improvements of Regular Syndrome Decoding Attacks.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#not-just-regular-decoding-asymptotics-and-improvements-of-regular-syndrome-decoding-attacks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#not-just-regular-decoding-asymptotics-and-improvements-of-regular-syndrome-decoding-attacks)
### Authors
* Andre Esser, Technology Innovation Institute, Abu Dhabi, UAE
* Paolo Santini, Marche Polytechnic University, Ancona, Italy
### Abstract
> Cryptographic constructions often base security on structured problem variants to enhance efficiency or to enable advanced functionalities. This led to the introduction of the Regular Syndrome Decoding (RSD) problem, which guarantees that a solution to the Syndrome Decoding (SD) problem follows a particular block-wise structure. Despite recent attacks exploiting that structure by Briaud and Øygarden (Eurocrypt ’23) and Carozza, Couteau and Joux (CCJ, Eurocrypt ’23), many questions about the impact of the regular structure on the problem hardness remain open.
> 
> In this work we initiate a systematic study of the hardness of the RSD problem starting from its asymptotics. We classify different parameter regimes revealing large regimes for which RSD instances are solvable in polynomial time and on the other hand regimes that lead to particularly hard instances. Against previous perceptions, we show that a classification solely based on the uniqueness of the solution is not sufficient for isolating the worst case parameters. Further, we provide an in-depth comparison between SD and RSD in terms of reducibility and computational complexity, identifying regimes in which RSD instances are actually harder to solve.
> 
> We provide the first asymptotic analyses of the algorithms presented by CCJ, establishing their worst case decoding complexities as \(2^{0.141n}\) and \(2^{0.135n}\), respectively. We then introduce regular-ISD algorithms by showing how to tailor the whole machinery of advanced Information Set Decoding (ISD) techniques from attacking SD to the RSD setting. The fastest regular-ISD algorithm improves the worst case decoding complexity significantly to \(2^{0.112n}\). Eventually, we show that also with respect to suggested parameters regular-ISD outperforms previous approaches in most cases, reducing security levels by up to 30 bits.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_6](https://doi.org/10.1007/978-3-031-68391-6_6)
## Quantum One-Wayness of the Single-Round Sponge with Invertible Permutations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#quantum-one-wayness-of-the-single-round-sponge-with-invertible-permutations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#quantum-one-wayness-of-the-single-round-sponge-with-invertible-permutations)
### Authors
* Joseph Carolan, University of Maryland College Park, College Park, USA
* Alexander Poremba, Massachusetts Institute of Technology, Cambridge, USA
### Abstract
> Sponge hashing is a widely used class of cryptographic hash algorithms which underlies the current international hash function standard SHA-3. In a nutshell, a sponge function takes as input a bit-stream of any length and processes it via a simple iterative procedure: it repeatedly feeds each block of the input into a so-called block function, and then produces a digest by once again iterating the block function on the final output bits. While much is known about the post-quantum security of the sponge construction in the case when the block function is modeled as a random function or one-way permutation, the case of permutations allowing inverse queries, which more accurately models the construction underlying SHA-3, has so far remained a fundamental open problem.
> 
> In this work, we make new progress towards overcoming this barrier and show several results. First, we prove the “double-sided zero-search” conjecture proposed by Unruh (eprint’ 2021) and show that finding zero-pairs in a random 2n-bit permutation requires at least \(\varOmega (2^{n/2})\) queries—and this is tight due to Grover’s algorithm. At the core of our proof lies a novel “symmetrization argument” which uses insights from the theory of Young subgroups. Second, we consider more general variants of the double-sided search problem and show similar query lower bounds for them. As an application, we prove the quantum one-wayness of the single-round sponge with invertible permutations in the quantum random permutation model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_7](https://doi.org/10.1007/978-3-031-68391-6_7)
## FuLeakage: Breaking FuLeeca by Learning Attacks.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#fuleakage-breaking-fuleeca-by-learning-attacks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#fuleakage-breaking-fuleeca-by-learning-attacks)
### Authors
* Felicitas Hörmann, Institute of Communications and Navigation, German Aerospace Center (DLR), Oberpfaffenhofen–Wessling, Germany
* Felicitas Hörmann, School of Computer Science, University of St. Gallen, St. Gallen, Switzerland
* Wessel van Woerden, Univ. Bordeaux, CNRS, Inria, Bordeaux INP, IMB, Talence, France
### Abstract
> FuLeeca is a signature scheme submitted to the recent NIST call for additional signatures. It is an efficient hash-and-sign scheme based on quasi-cyclic codes in the Lee metric and resembles the lattice-based signature Falcon. FuLeeca proposes a so-called concentration step within the signing procedure to avoid leakage of secret-key information from the signatures. However, FuLeeca is still vulnerable to learning attacks, which were first observed for lattice-based schemes. We present three full key-recovery attacks by exploiting the proximity of the code-based FuLeeca scheme to lattice-based primitives.
> 
> More precisely, we use a few signatures to extract an n/2-dimensional circulant sublattice from the given length-n code, that still contains the exceptionally short secret-key vector. This significantly reduces the classical attack cost and, in addition, leads to a full key recovery in quantum-polynomial time. Furthermore, we exploit a bias in the concentration procedure to classically recover the full key for any security level with at most 175,000 signatures in less than an hour.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_8](https://doi.org/10.1007/978-3-031-68391-6_8)
## FRIDA: Data Availability Sampling from FRI.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#frida-data-availability-sampling-from-fri)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#frida-data-availability-sampling-from-fri)
### Authors
* Mathias Hall-Andersen, ZkSecurity, Kolkata, India
* Mark Simkin, Ethereum Foundation, Zug, Switzerland
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### Abstract
> As blockchains like Ethereum continue to grow, clients with limited resources can no longer store the entire chain. Light nodes that want to use the blockchain, without verifying that it is in a good state overall, can just download the block headers without the corresponding block contents. As those light nodes may eventually need some of the block contents, they would like to ensure that they are in principle available.
> 
> Data availability sampling, introduced by Bassam et al., is a process that allows light nodes to check the availability of data without download it. In a recent effort, Hall-Andersen, Simkin, and Wagner have introduced formal definitions and analyzed several constructions. While their work thoroughly lays the formal foundations for data availability sampling, the constructions are either prohibitively expensive, use a trusted setup, or have a download complexity for light clients scales with a square root of the data size.
> 
> In this work, we make a significant step forward by proposing an efficient data availability sampling scheme without a trusted setup and only polylogarithmic overhead. To this end, we find a novel connection with interactive oracle proofs of proximity (IOPPs). Specifically, we prove that any IOPP meeting an additional consistency criterion can be turned into an erasure code commitment, and then, leveraging a compiler due to Hall-Andersen, Simkin, and Wagner, into a data availability sampling scheme. This new connection enables data availability to benefit from future results on IOPPs. We then show that the widely used FRI IOPP satisfies our consistency criterion and demonstrate that the resulting data availability sampling scheme outperforms the state-of-the-art asymptotically and concretely in multiple parameters.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_9](https://doi.org/10.1007/978-3-031-68391-6_9)
## Pseudorandom Error-Correcting Codes.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#pseudorandom-error-correcting-codes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#pseudorandom-error-correcting-codes)
### Authors
* Miranda Christ, Columbia University, New York, USA
* Sam Gunn, UC Berkeley, Berkeley, USA
### Abstract
> We construct pseudorandom error-correcting codes (or simply pseudorandom codes), which are error-correcting codes with the property that any polynomial number of codewords are pseudorandom to any computationally-bounded adversary. Efficient decoding of corrupted codewords is possible with the help of a decoding key.
> 
> We build pseudorandom codes that are robust to substitution and deletion errors, where pseudorandomness rests on standard cryptographic assumptions. Specifically, pseudorandomness is based on either \(2^{O(\sqrt{n})}\)-hardness of LPN, or polynomial hardness of LPN and the planted XOR problem at low density.
> 
> As our primary application of pseudorandom codes, we present an undetectable watermarking scheme for outputs of language models that is robust to cropping and a constant rate of random substitutions and deletions. The watermark is undetectable in the sense that any number of samples of watermarked text are computationally indistinguishable from text output by the original model. This is the first undetectable watermarking scheme that can tolerate a constant rate of errors.
> 
> Our second application is to steganography, where a secret message is hidden in innocent-looking content. We present a constant-rate stateless steganography scheme with robustness to a constant rate of substitutions. Ours is the first stateless steganography scheme with provable steganographic security and any robustness to errors.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_10](https://doi.org/10.1007/978-3-031-68391-6_10)
## Certifying Private Probabilistic Mechanisms.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#certifying-private-probabilistic-mechanisms)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#certifying-private-probabilistic-mechanisms)
### Authors
* Zoë Ruha Bell, University of California, Berkeley, USA
* Shafi Goldwasser, University of California, Berkeley, USA
* Jean-Luc Watson, University of California, Berkeley, USA
* Michael P. Kim, Cornell University, Ithaca, New York, USA
### Abstract
> In past years, entire research communities have arisen to address concerns of privacy and fairness in data analysis. At present, however, the public must trust that institutions will re-implement algorithms voluntarily to account for these social concerns. Due to additional cost, widespread adoption is unlikely without effective legal enforcement. A technical challenge for enforcement is that the methods proposed are often probabilistic mechanisms, whose output must be drawn according to precise, and sometimes secret, distributions. The Differential Privacy (DP) case is illustrative: if a cheating curator answers queries according to an overly-accurate mechanism, privacy violations could go undetected. This raises our central question: Can we efficiently certify the output of a probabilistic mechanism enacted by an untrusted party? To this end:
> 
> 1. We introduce two new notions: Certified Probabilistic Mechanisms (CPM) and Random Variable Commitment Schemes (RVCS). A CPM is an interactive protocol that forces a prover to enact a given probabilistic mechanism or be caught; importantly, the interaction does not reveal the mechanism’s secret parameters. An RVCS—a key primitive for constructing CPMs—is a commitment scheme where the verifier is convinced that the commitment is to an RV sampled according to an agreed-upon distribution, but learns nothing else.
> 
> 2. We instantiate the general notion of CPM for the special case of Certifying DP. We build a lightweight, doubly-efficent interactive proof system to certify arbitrary-predicate counting queries released via the DP Binomial mechanism. The construction relies on a commitment scheme with perfect hiding and additive homomorphic properties that can be used to release a broad class of queries about a committed database, constructed on top of Pedersen commitments.
> 
> 3. Finally, we demonstrate the immediate feasibility of Certified DP via a highly-efficient and scalable prototype implementation to answer counting queries of arbitrary predicates. The mechanism is composed of an offline and online stage, where the online phase allows for non-interactive certification of queries. For example, we show that CDP queries over a US Census Public Use Microdata Sample (PUMS) [24] (\(n=7000\)) can be completed in only 1.6 ms and verified in just 38 \(\mu \)s. Our implementation is available in open source at https://github.com/jlwatson/certified-dp.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_11](https://doi.org/10.1007/978-3-031-68391-6_11)
## Formal Security Proofs via Doeblin Coefficients: - Optimal Side-Channel Factorization from Noisy Leakage to Random Probing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#formal-security-proofs-via-doeblin-coefficients-optimal-side-channel-factorization-from-noisy-leakage-to-random-probing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#formal-security-proofs-via-doeblin-coefficients-optimal-side-channel-factorization-from-noisy-leakage-to-random-probing)
### Authors
* Julien Béguinot, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Wei Cheng, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Sylvain Guilley, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Olivier Rioul, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Wei Cheng, Secure-IC S.A.S., Paris, France
* Sylvain Guilley, Secure-IC S.A.S., Paris, France
### Abstract
> Masking is one of the most popular countermeasures to side-channel attacks, because it can offer provable security. However, depending on the adversary’s model, useful security guarantees can be hard to provide. At first, masking has been shown secure against t-threshold probing adversaries by Ishai et al. at Crypto’03. It has then been shown secure in the more generic random probing model by Duc et al. at Eurocrypt’14. Prouff and Rivain have introduced the noisy leakage model to capture more realistic leakage at Eurocrypt’13. Reduction from noisy leakage to random probing has been introduced by Duc et al. at Eurocrypt’14, and security guarantees were improved for both models by Prest et al. at Crypto’19, Duc et al. in Eurocrypt’15/J. Cryptol’19, and Masure and Standaert at Crypto’23. Unfortunately, as it turns out, we found that previous proofs in either random probing or noisy leakage models are flawed, and such flaws do not appear easy to fix.
> 
> In this work, we show that the Doeblin coefficient allows one to overcome these flaws. In fact, it yields optimal reductions from noisy leakage to random probing, thereby providing a correct and usable metric to properly ground security proofs. This shows the inherent inevitable cost of a reduction from the noisy leakages to the random probing model. We show that it can also be used to derive direct formal security proofs using the subsequence decomposition of Prouff and Rivain.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_12](https://doi.org/10.1007/978-3-031-68391-6_12)
## Leakage Certification Made Simple.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#leakage-certification-made-simple)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#leakage-certification-made-simple)
### Authors
* Aakash Chowdhury, University of Klagenfurt, Klagenfurt, Austria
* Elisabeth Oswald, University of Klagenfurt, Klagenfurt, Austria
* Carlo Brunetta, Independent Researcher, Trieste, Italy
* Elisabeth Oswald, University of Birmingham, Birmingham, UK
* Arnab Roy, University of Innsbruck, Innsbruck, Austria
### Abstract
> Side channel evaluations benefit from sound characterisations of adversarial leakage models, which are the determining factor for attack success. Two questions are of interest: can we define and estimate a quantity that captures the ideal adversary (who knows all the distributions that are involved in an attack), and can we define and estimate a quantity that captures a concrete adversary (represented by a given leakage model)?
> 
> Existing work has led to a proliferation of custom quantities to measure both types of adversaries, which can be data intensive to estimate in the ideal case, even for discrete side channels and especially when the number of dimensions in the side channel traces grows.
> 
> In this paper, we show how to define the mutual information between carefully chosen variables of interest and how to instantiate a recently suggested mutual information estimator for practical estimation. We apply our results to real-world data sets and are the first to provide a mutual information-based characterisation of ideal and concrete adversaries utilising up to 30 data points.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_13](https://doi.org/10.1007/978-3-031-68391-6_13)
## Improved Reductions from Noisy to Bounded and Probing Leakages via Hockey-Stick Divergences.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#improved-reductions-from-noisy-to-bounded-and-probing-leakages-via-hockey-stick-divergences)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#improved-reductions-from-noisy-to-bounded-and-probing-leakages-via-hockey-stick-divergences)
### Authors
* Maciej Obresmki, National University of Singapore, Singapore, Singapore
* João Ribeiro, NOVA LINCS and NOVA School of Science and Technology, Caparica, Portugal
* Lawrence Roy, Aarhus University, Aarhus, Denmark
* François-Xavier Standaert, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
### Abstract
> There exists a mismatch between the theory and practice of cryptography in the presence of leakage. On the theoretical front, the bounded leakage model, where the adversary learns bounded-length but noiseless information about secret components, and the random probing model, where the adversary learns some internal values of a leaking implementation with some probability, are convenient abstractions to analyze the security of numerous designs. On the practical front, side-channel attacks produce long transcripts which are inherently noisy but provide information about all internal computations, and this noisiness is usually evaluated with closely related metrics like the mutual information or statistical distance. Ideally, we would like to claim that resilience to bounded leakage or random probing implies resilience to noisy leakage evaluated according to these metrics. However, prior work (Duc, Dziembowski and Faust, Eurocrypt 2014; Brian et al., Eurocrypt 2021) has shown that proving such reductions with useful parameters is challenging.
> 
> In this work, we study noisy leakage models stemming from hockey-stick divergences, which generalize statistical distance and are also the basis of differential privacy. First, we show that resilience to bounded leakage and random probing implies resilience to our new noisy leakage model with improved parameters compared to models based on the statistical distance or mutual information. Second, we establish composition theorems for our model, showing that these connections extend to a setting where multiple leakages are obtained from a leaking implementation. We complement our theoretical results with a discussion of practical relevance, highlighting that (i) the reduction to bounded leakage applies to realistic leakage functions with noise levels that are decreased by several orders of magnitude compared to Brian et al., and (ii) the reduction to random probing usefully generalizes the seminal work of Duc, Dziembowski, and Faust, although it remains limited when the field size in which masking operates grows (i.e., hockey-stick divergences can better hide the field size dependency of the noise requirements, but do not annihilate it).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_14](https://doi.org/10.1007/978-3-031-68391-6_14)
## Quantum Complexity for Discrete Logarithms and Related Problems.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#quantum-complexity-for-discrete-logarithms-and-related-problems)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#quantum-complexity-for-discrete-logarithms-and-related-problems)
### Authors
* Minki Hhan, KIAS, Seoul, South Korea
* Takashi Yamakawa, NTT Social Informatics Laboratories, Minato-ku, Japan
* Aaram Yun, Ewha Womans University, Seoul, South Korea
### Abstract
> This paper studies the quantum computational complexity of the discrete logarithm (DL) and related group-theoretic problems in the context of “generic algorithms”—that is, algorithms that do not exploit any properties of the group encoding.
> 
> We establish the quantum generic group model and hybrid classical-quantum generic group model as quantum and hybrid analogs of their classical counterpart. This model counts the number of group operations of the underlying cyclic group \(\mathcal {G}\) as a complexity measure. Shor’s algorithm for the discrete logarithm problem and related algorithms can be described in this model and make \(O(\log |\mathcal {G}|)\) group operations in their basic form. We show the quantum complexity lower bounds and (almost) matching algorithms of the discrete logarithm and related problems in these models.
> 
> We prove that any quantum DL algorithm in the quantum generic group model must make \(\varOmega (\log |\mathcal G|)\) depth of group operation queries. This shows that Shor’s algorithm that makes \(O(\log |\mathcal G|)\) group operations is asymptotically optimal among the generic quantum algorithms, even considering parallel algorithms.
> 
> We observe that some (known) variations of Shor’s algorithm can take advantage of classical computations to reduce the number and depth of quantum group operations. We show that these variants are optimal among generic hybrid algorithms up to constant multiplicative factors: Any generic hybrid quantum-classical DL algorithm with a total number of (classical or quantum) group operations Q must make \(\varOmega (\log |\mathcal G|/\log Q)\) quantum group operations of depth \(\varOmega (\log \log |\mathcal G| - \log \log Q)\).
> 
> When the quantum memory can only store t group elements and use quantum random access classical memory (QRACM) of r group elements, any generic hybrid quantum-classical algorithm must make either \(\varOmega (\sqrt{|\mathcal G|})\) group operation queries in total or \(\varOmega (\log |\mathcal G|/\log (tr))\) quantum group operation queries. In particular, classical queries cannot reduce the number of quantum queries beyond \(\varOmega (\log |\mathcal G|/\log (tr))\).
> 
> As a side contribution, we show a multiple discrete logarithm problem admits a better algorithm than solving each instance one by one, refuting a strong form of the quantum annoying property suggested in the context of password-authenticated key exchange protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_1](https://doi.org/10.1007/978-3-031-68391-6_1)
## Is ML-Based Cryptanalysis Inherently Limited? Simulating Cryptographic Adversaries via Gradient-Based Methods.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#is-ml-based-cryptanalysis-inherently-limited-simulating-cryptographic-adversaries-via-gradient-based-methods)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#is-ml-based-cryptanalysis-inherently-limited-simulating-cryptographic-adversaries-via-gradient-based-methods)
### Authors
* Avital Shafran, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
* Eran Malach, Kempner Institute for the Study of Natural and Artificial Intelligence, Harvard University, MA, USA
* Thomas Ristenpart, Department of Computer Science, Cornell Tech, New York, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
### Abstract
> Given the recent progress in machine learning (ML), the cryptography community has started exploring the applicability of ML methods to the design of new cryptanalytic approaches. While current empirical results show promise, the extent to which such methods may outperform classical cryptanalytic approaches is still somewhat unclear.
> 
> In this work, we initiate exploration of the theory of ML-based cryptanalytic techniques, in particular providing new results towards understanding whether they are fundamentally limited compared to traditional approaches. Whereas most classic cryptanalysis crucially relies on directly processing individual samples (e.g., plaintext-ciphertext pairs), modern ML methods thus far only interact with samples via gradient-based computations that average a loss function over all samples. It is, therefore, conceivable that such gradient-based methods are inherently weaker than classical approaches.
> 
> We introduce a unifying framework for capturing both “sample-based” adversaries that are provided with direct access to individual samples and “gradient-based” ones that are restricted to issuing gradient-based queries that are averaged over all given samples via a loss function. Within our framework, we establish a general feasibility result showing that any sample-based adversary can be simulated by a seemingly-weaker gradient-based one. Moreover, the simulation exhibits a nearly optimal overhead in terms of the gradient-based simulator’s running time. Finally, we extend and refine our simulation technique to construct a gradient-based simulator that is fully parallelizable (crucial for avoiding an undesirable overhead for parallelizable cryptanalytic tasks), which is then used to construct a gradient-based simulator that executes the particular and highly useful gradient-descent method.
> 
> Taken together, although the extent to which ML methods may outperform classical cryptanalytic approaches is still somewhat unclear, our results indicate that such gradient-based methods are not inherently limited by their seemingly restricted access to the provided samples.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_2](https://doi.org/10.1007/978-3-031-68391-6_2)
## Quantum Lattice Enumeration in Limited Depth.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#quantum-lattice-enumeration-in-limited-depth)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#quantum-lattice-enumeration-in-limited-depth)
### Authors
* Nina Bindel, SandboxAQ, Palo Alto, CA, USA
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* Marcel Tiepelt, KASTEL, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Fernando Virdia, NOVA LINCS, Univerisdade NOVA de Lisboa, Lisbon, Portugal
### Abstract
> In 2018, Aono et al. (ASIACRYPT 2018) proposed to use quantum backtracking algorithms (Montanaro, TOC 2018; Ambainis and Kokainis, STOC 2017) to speedup lattice point enumeration. Quantum lattice sieving algorithms had already been proposed (Laarhoven et al., PQCRYPTO 2013), being shown to provide an asymptotic speedup over classical counterparts, but also to lose competitiveness at dimensions relevant to cryptography if practical considerations on quantum computer architecture were taken into account (Albrecht et al., ASIACRYPT 2020). Aono et al.’s work argued that quantum walk speedups can be applied to lattice enumeration, achieving at least a quadratic asymptotic speedup à la Grover search while not requiring exponential amounts of quantum accessible classical memory, as it is the case for sieving. In this work, we explore how to lower bound the cost of using Aono et al.’s techniques on lattice enumeration with extreme cylinder pruning, assuming a limit to the maximum depth that a quantum computation can achieve without decohering, with the objective of better understanding the practical applicability of quantum backtracking in lattice cryptanalysis.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_3](https://doi.org/10.1007/978-3-031-68391-6_3)
## Space-Efficient and Noise-Robust Quantum Factoring.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#space-efficient-and-noise-robust-quantum-factoring)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#space-efficient-and-noise-robust-quantum-factoring)
### Authors
* Seyoon Ragavan, MIT CSAIL, Cambridge, USA
* Vinod Vaikuntanathan, MIT CSAIL, Cambridge, USA
### Abstract
> We provide two improvements to Regev’s quantum factoring algorithm (arXiv:2308.06572), addressing its space efficiency and its noise-tolerance.
> 
> Our first contribution is to improve the quantum space efficiency of Regev’s algorithm while keeping the circuit size the same. Our main result constructs a quantum factoring circuit using \(O(n \log n)\) qubits and \(O(n^{3/2} \log n)\) gates. We achieve the best of Shor and Regev (upto a logarithmic factor in the space complexity): on the one hand, Regev’s circuit requires \(O(n^{3/2})\) qubits and \(O(n^{3/2} \log n)\) gates, while Shor’s circuit requires \(O(n^2 \log n)\) gates but only O(n) qubits. As with Regev, to factor an n-bit integer N, we run our circuit independently \(\approx \sqrt{n}\) times and apply Regev’s classical postprocessing procedure.
> 
> Our optimization is achieved by implementing efficient and reversible exponentiation with Fibonacci numbers in the exponent, rather than the usual powers of 2, adapting work by Kaliski (arXiv:1711.02491) from the classical reversible setting to the quantum setting. This technique also allows us to perform quantum modular exponentiation that is efficient in both space and size without requiring significant precomputation, a result that may be useful for other quantum algorithms. A key ingredient of our exponentiation implementation is an efficient circuit for a function resembling in-place quantum-quantum modular multiplication. This implementation works with only black-box access to any quantum circuit for out-of-place modular multiplication, which we believe is yet another result of potentially broader interest.
> 
> Our second contribution is to show that Regev’s classical postprocessing procedure can be modified to tolerate a constant fraction of the quantum circuit runs being corrupted by errors. In contrast, Regev’s analysis of his classical postprocessing procedure requires all \(\approx \sqrt{n}\) runs to be successful. In a nutshell, we achieve this using lattice reduction techniques to detect and filter out corrupt samples.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_4](https://doi.org/10.1007/978-3-031-68391-6_4)
## CryptAttackTester: high-assurance attack analysis.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#cryptattacktester-high-assurance-attack-analysis)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#cryptattacktester-high-assurance-attack-analysis)
### Authors
* Daniel J. Bernstein, University of Illinois at Chicago, Chicago, USA
* Daniel J. Bernstein, Ruhr University Bochum, Bochum, Germany
* Daniel J. Bernstein, Academia Sinica, Taipei, Taiwan
* Tung Chou, Academia Sinica, Taipei, Taiwan
### Abstract
> Quantitative analyses of the costs of cryptographic attack algorithms play a central role in comparing cryptosystems, guiding the search for improved attacks, and deciding which cryptosystems to standardize. Unfortunately, these analyses often turn out to be wrong. Sometimes errors are not caught until years later.
> 
> This paper introduces CryptAttackTester (CAT), a software framework for high-assurance quantification of attack effectiveness. CAT enforces complete definitions of attack algorithms all the way down through the model of computation, enforces complete definitions of probability predictions and cost predictions all the way down through the cost metric, and systematically tests the predictions on small-scale inputs.
> 
> For example, CAT gives a fully defined meaning to the statement “the median cost of brute-force search for an AES-128 key is under \(2^{141.89}\) bit operations”, and provides clear, auditable reasons to believe that the statement is correct. This does not rule out all possible analysis errors, but with CAT it is no longer possible for bugs to hide inside ambiguous or untested security-level claims. The paper gives various examples of errors in the literature that survived typical informal testing practices and that would have been caught if CAT-enforced links had been in place.
> 
> As an important case study, the bulk of the current CAT release consists of full definitions of a broad spectrum of algorithms for information-set decoding (ISD), along with cost/probability predictions for each algorithm. ISD is the top attack strategy against the McEliece cryptosystem. The predictions cover interactions between (1) high-level search strategies from Prange, Lee–Brickell, Leon, Stern, Dumer, May–Meurer–Thomae, and Becker–Joux–May–Meurer; (2) random walks from Omura, Canteaut–Chabaud, Canteaut–Sendrier, and Bernstein–Lange–Peters; and (3) speedups in core subroutines such as linear algebra and sorting. The predictions also account for various attack overheads that were omitted from previous analyses. These gaps add up to roughly 10 bits, depending on parameters. CAT’s tests catch much smaller errors than this.
> 
> The cost metric selected in CAT has a very simple definition, is a lower bound for the price-performance ratio of non-quantum special-purpose hardware (although the bound is loose for attacks bottlenecked by long-distance communication), and allows many optimization efforts to be shared with the design of cryptographic circuits.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_5](https://doi.org/10.1007/978-3-031-68391-6_5)
## Not Just Regular Decoding: Asymptotics and Improvements of Regular Syndrome Decoding Attacks.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#not-just-regular-decoding-asymptotics-and-improvements-of-regular-syndrome-decoding-attacks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#not-just-regular-decoding-asymptotics-and-improvements-of-regular-syndrome-decoding-attacks)
### Authors
* Andre Esser, Technology Innovation Institute, Abu Dhabi, UAE
* Paolo Santini, Marche Polytechnic University, Ancona, Italy
### Abstract
> Cryptographic constructions often base security on structured problem variants to enhance efficiency or to enable advanced functionalities. This led to the introduction of the Regular Syndrome Decoding (RSD) problem, which guarantees that a solution to the Syndrome Decoding (SD) problem follows a particular block-wise structure. Despite recent attacks exploiting that structure by Briaud and Øygarden (Eurocrypt ’23) and Carozza, Couteau and Joux (CCJ, Eurocrypt ’23), many questions about the impact of the regular structure on the problem hardness remain open.
> 
> In this work we initiate a systematic study of the hardness of the RSD problem starting from its asymptotics. We classify different parameter regimes revealing large regimes for which RSD instances are solvable in polynomial time and on the other hand regimes that lead to particularly hard instances. Against previous perceptions, we show that a classification solely based on the uniqueness of the solution is not sufficient for isolating the worst case parameters. Further, we provide an in-depth comparison between SD and RSD in terms of reducibility and computational complexity, identifying regimes in which RSD instances are actually harder to solve.
> 
> We provide the first asymptotic analyses of the algorithms presented by CCJ, establishing their worst case decoding complexities as \(2^{0.141n}\) and \(2^{0.135n}\), respectively. We then introduce regular-ISD algorithms by showing how to tailor the whole machinery of advanced Information Set Decoding (ISD) techniques from attacking SD to the RSD setting. The fastest regular-ISD algorithm improves the worst case decoding complexity significantly to \(2^{0.112n}\). Eventually, we show that also with respect to suggested parameters regular-ISD outperforms previous approaches in most cases, reducing security levels by up to 30 bits.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_6](https://doi.org/10.1007/978-3-031-68391-6_6)
## Quantum One-Wayness of the Single-Round Sponge with Invertible Permutations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#quantum-one-wayness-of-the-single-round-sponge-with-invertible-permutations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#quantum-one-wayness-of-the-single-round-sponge-with-invertible-permutations)
### Authors
* Joseph Carolan, University of Maryland College Park, College Park, USA
* Alexander Poremba, Massachusetts Institute of Technology, Cambridge, USA
### Abstract
> Sponge hashing is a widely used class of cryptographic hash algorithms which underlies the current international hash function standard SHA-3. In a nutshell, a sponge function takes as input a bit-stream of any length and processes it via a simple iterative procedure: it repeatedly feeds each block of the input into a so-called block function, and then produces a digest by once again iterating the block function on the final output bits. While much is known about the post-quantum security of the sponge construction in the case when the block function is modeled as a random function or one-way permutation, the case of permutations allowing inverse queries, which more accurately models the construction underlying SHA-3, has so far remained a fundamental open problem.
> 
> In this work, we make new progress towards overcoming this barrier and show several results. First, we prove the “double-sided zero-search” conjecture proposed by Unruh (eprint’ 2021) and show that finding zero-pairs in a random 2n-bit permutation requires at least \(\varOmega (2^{n/2})\) queries—and this is tight due to Grover’s algorithm. At the core of our proof lies a novel “symmetrization argument” which uses insights from the theory of Young subgroups. Second, we consider more general variants of the double-sided search problem and show similar query lower bounds for them. As an application, we prove the quantum one-wayness of the single-round sponge with invertible permutations in the quantum random permutation model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_7](https://doi.org/10.1007/978-3-031-68391-6_7)
## FuLeakage: Breaking FuLeeca by Learning Attacks.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#fuleakage-breaking-fuleeca-by-learning-attacks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#fuleakage-breaking-fuleeca-by-learning-attacks)
### Authors
* Felicitas Hörmann, Institute of Communications and Navigation, German Aerospace Center (DLR), Oberpfaffenhofen–Wessling, Germany
* Felicitas Hörmann, School of Computer Science, University of St. Gallen, St. Gallen, Switzerland
* Wessel van Woerden, Univ. Bordeaux, CNRS, Inria, Bordeaux INP, IMB, Talence, France
### Abstract
> FuLeeca is a signature scheme submitted to the recent NIST call for additional signatures. It is an efficient hash-and-sign scheme based on quasi-cyclic codes in the Lee metric and resembles the lattice-based signature Falcon. FuLeeca proposes a so-called concentration step within the signing procedure to avoid leakage of secret-key information from the signatures. However, FuLeeca is still vulnerable to learning attacks, which were first observed for lattice-based schemes. We present three full key-recovery attacks by exploiting the proximity of the code-based FuLeeca scheme to lattice-based primitives.
> 
> More precisely, we use a few signatures to extract an n/2-dimensional circulant sublattice from the given length-n code, that still contains the exceptionally short secret-key vector. This significantly reduces the classical attack cost and, in addition, leads to a full key recovery in quantum-polynomial time. Furthermore, we exploit a bias in the concentration procedure to classically recover the full key for any security level with at most 175,000 signatures in less than an hour.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_8](https://doi.org/10.1007/978-3-031-68391-6_8)
## FRIDA: Data Availability Sampling from FRI.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#frida-data-availability-sampling-from-fri)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#frida-data-availability-sampling-from-fri)
### Authors
* Mathias Hall-Andersen, ZkSecurity, Kolkata, India
* Mark Simkin, Ethereum Foundation, Zug, Switzerland
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### Abstract
> As blockchains like Ethereum continue to grow, clients with limited resources can no longer store the entire chain. Light nodes that want to use the blockchain, without verifying that it is in a good state overall, can just download the block headers without the corresponding block contents. As those light nodes may eventually need some of the block contents, they would like to ensure that they are in principle available.
> 
> Data availability sampling, introduced by Bassam et al., is a process that allows light nodes to check the availability of data without download it. In a recent effort, Hall-Andersen, Simkin, and Wagner have introduced formal definitions and analyzed several constructions. While their work thoroughly lays the formal foundations for data availability sampling, the constructions are either prohibitively expensive, use a trusted setup, or have a download complexity for light clients scales with a square root of the data size.
> 
> In this work, we make a significant step forward by proposing an efficient data availability sampling scheme without a trusted setup and only polylogarithmic overhead. To this end, we find a novel connection with interactive oracle proofs of proximity (IOPPs). Specifically, we prove that any IOPP meeting an additional consistency criterion can be turned into an erasure code commitment, and then, leveraging a compiler due to Hall-Andersen, Simkin, and Wagner, into a data availability sampling scheme. This new connection enables data availability to benefit from future results on IOPPs. We then show that the widely used FRI IOPP satisfies our consistency criterion and demonstrate that the resulting data availability sampling scheme outperforms the state-of-the-art asymptotically and concretely in multiple parameters.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_9](https://doi.org/10.1007/978-3-031-68391-6_9)
## Pseudorandom Error-Correcting Codes.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#pseudorandom-error-correcting-codes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#pseudorandom-error-correcting-codes)
### Authors
* Miranda Christ, Columbia University, New York, USA
* Sam Gunn, UC Berkeley, Berkeley, USA
### Abstract
> We construct pseudorandom error-correcting codes (or simply pseudorandom codes), which are error-correcting codes with the property that any polynomial number of codewords are pseudorandom to any computationally-bounded adversary. Efficient decoding of corrupted codewords is possible with the help of a decoding key.
> 
> We build pseudorandom codes that are robust to substitution and deletion errors, where pseudorandomness rests on standard cryptographic assumptions. Specifically, pseudorandomness is based on either \(2^{O(\sqrt{n})}\)-hardness of LPN, or polynomial hardness of LPN and the planted XOR problem at low density.
> 
> As our primary application of pseudorandom codes, we present an undetectable watermarking scheme for outputs of language models that is robust to cropping and a constant rate of random substitutions and deletions. The watermark is undetectable in the sense that any number of samples of watermarked text are computationally indistinguishable from text output by the original model. This is the first undetectable watermarking scheme that can tolerate a constant rate of errors.
> 
> Our second application is to steganography, where a secret message is hidden in innocent-looking content. We present a constant-rate stateless steganography scheme with robustness to a constant rate of substitutions. Ours is the first stateless steganography scheme with provable steganographic security and any robustness to errors.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_10](https://doi.org/10.1007/978-3-031-68391-6_10)
## Certifying Private Probabilistic Mechanisms.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#certifying-private-probabilistic-mechanisms)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#certifying-private-probabilistic-mechanisms)
### Authors
* Zoë Ruha Bell, University of California, Berkeley, USA
* Shafi Goldwasser, University of California, Berkeley, USA
* Jean-Luc Watson, University of California, Berkeley, USA
* Michael P. Kim, Cornell University, Ithaca, New York, USA
### Abstract
> In past years, entire research communities have arisen to address concerns of privacy and fairness in data analysis. At present, however, the public must trust that institutions will re-implement algorithms voluntarily to account for these social concerns. Due to additional cost, widespread adoption is unlikely without effective legal enforcement. A technical challenge for enforcement is that the methods proposed are often probabilistic mechanisms, whose output must be drawn according to precise, and sometimes secret, distributions. The Differential Privacy (DP) case is illustrative: if a cheating curator answers queries according to an overly-accurate mechanism, privacy violations could go undetected. This raises our central question: Can we efficiently certify the output of a probabilistic mechanism enacted by an untrusted party? To this end:
> 
> 1. We introduce two new notions: Certified Probabilistic Mechanisms (CPM) and Random Variable Commitment Schemes (RVCS). A CPM is an interactive protocol that forces a prover to enact a given probabilistic mechanism or be caught; importantly, the interaction does not reveal the mechanism’s secret parameters. An RVCS—a key primitive for constructing CPMs—is a commitment scheme where the verifier is convinced that the commitment is to an RV sampled according to an agreed-upon distribution, but learns nothing else.
> 
> 2. We instantiate the general notion of CPM for the special case of Certifying DP. We build a lightweight, doubly-efficent interactive proof system to certify arbitrary-predicate counting queries released via the DP Binomial mechanism. The construction relies on a commitment scheme with perfect hiding and additive homomorphic properties that can be used to release a broad class of queries about a committed database, constructed on top of Pedersen commitments.
> 
> 3. Finally, we demonstrate the immediate feasibility of Certified DP via a highly-efficient and scalable prototype implementation to answer counting queries of arbitrary predicates. The mechanism is composed of an offline and online stage, where the online phase allows for non-interactive certification of queries. For example, we show that CDP queries over a US Census Public Use Microdata Sample (PUMS) [24] (\(n=7000\)) can be completed in only 1.6 ms and verified in just 38 \(\mu \)s. Our implementation is available in open source at https://github.com/jlwatson/certified-dp.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_11](https://doi.org/10.1007/978-3-031-68391-6_11)
## Formal Security Proofs via Doeblin Coefficients: - Optimal Side-Channel Factorization from Noisy Leakage to Random Probing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#formal-security-proofs-via-doeblin-coefficients-optimal-side-channel-factorization-from-noisy-leakage-to-random-probing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#formal-security-proofs-via-doeblin-coefficients-optimal-side-channel-factorization-from-noisy-leakage-to-random-probing)
### Authors
* Julien Béguinot, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Wei Cheng, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Sylvain Guilley, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Olivier Rioul, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Wei Cheng, Secure-IC S.A.S., Paris, France
* Sylvain Guilley, Secure-IC S.A.S., Paris, France
### Abstract
> Masking is one of the most popular countermeasures to side-channel attacks, because it can offer provable security. However, depending on the adversary’s model, useful security guarantees can be hard to provide. At first, masking has been shown secure against t-threshold probing adversaries by Ishai et al. at Crypto’03. It has then been shown secure in the more generic random probing model by Duc et al. at Eurocrypt’14. Prouff and Rivain have introduced the noisy leakage model to capture more realistic leakage at Eurocrypt’13. Reduction from noisy leakage to random probing has been introduced by Duc et al. at Eurocrypt’14, and security guarantees were improved for both models by Prest et al. at Crypto’19, Duc et al. in Eurocrypt’15/J. Cryptol’19, and Masure and Standaert at Crypto’23. Unfortunately, as it turns out, we found that previous proofs in either random probing or noisy leakage models are flawed, and such flaws do not appear easy to fix.
> 
> In this work, we show that the Doeblin coefficient allows one to overcome these flaws. In fact, it yields optimal reductions from noisy leakage to random probing, thereby providing a correct and usable metric to properly ground security proofs. This shows the inherent inevitable cost of a reduction from the noisy leakages to the random probing model. We show that it can also be used to derive direct formal security proofs using the subsequence decomposition of Prouff and Rivain.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_12](https://doi.org/10.1007/978-3-031-68391-6_12)
## Leakage Certification Made Simple.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#leakage-certification-made-simple)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#leakage-certification-made-simple)
### Authors
* Aakash Chowdhury, University of Klagenfurt, Klagenfurt, Austria
* Elisabeth Oswald, University of Klagenfurt, Klagenfurt, Austria
* Carlo Brunetta, Independent Researcher, Trieste, Italy
* Elisabeth Oswald, University of Birmingham, Birmingham, UK
* Arnab Roy, University of Innsbruck, Innsbruck, Austria
### Abstract
> Side channel evaluations benefit from sound characterisations of adversarial leakage models, which are the determining factor for attack success. Two questions are of interest: can we define and estimate a quantity that captures the ideal adversary (who knows all the distributions that are involved in an attack), and can we define and estimate a quantity that captures a concrete adversary (represented by a given leakage model)?
> 
> Existing work has led to a proliferation of custom quantities to measure both types of adversaries, which can be data intensive to estimate in the ideal case, even for discrete side channels and especially when the number of dimensions in the side channel traces grows.
> 
> In this paper, we show how to define the mutual information between carefully chosen variables of interest and how to instantiate a recently suggested mutual information estimator for practical estimation. We apply our results to real-world data sets and are the first to provide a mutual information-based characterisation of ideal and concrete adversaries utilising up to 30 data points.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_13](https://doi.org/10.1007/978-3-031-68391-6_13)
## Improved Reductions from Noisy to Bounded and Probing Leakages via Hockey-Stick Divergences.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-6].md#improved-reductions-from-noisy-to-bounded-and-probing-leakages-via-hockey-stick-divergences)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#improved-reductions-from-noisy-to-bounded-and-probing-leakages-via-hockey-stick-divergences)
### Authors
* Maciej Obresmki, National University of Singapore, Singapore, Singapore
* João Ribeiro, NOVA LINCS and NOVA School of Science and Technology, Caparica, Portugal
* Lawrence Roy, Aarhus University, Aarhus, Denmark
* François-Xavier Standaert, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
### Abstract
> There exists a mismatch between the theory and practice of cryptography in the presence of leakage. On the theoretical front, the bounded leakage model, where the adversary learns bounded-length but noiseless information about secret components, and the random probing model, where the adversary learns some internal values of a leaking implementation with some probability, are convenient abstractions to analyze the security of numerous designs. On the practical front, side-channel attacks produce long transcripts which are inherently noisy but provide information about all internal computations, and this noisiness is usually evaluated with closely related metrics like the mutual information or statistical distance. Ideally, we would like to claim that resilience to bounded leakage or random probing implies resilience to noisy leakage evaluated according to these metrics. However, prior work (Duc, Dziembowski and Faust, Eurocrypt 2014; Brian et al., Eurocrypt 2021) has shown that proving such reductions with useful parameters is challenging.
> 
> In this work, we study noisy leakage models stemming from hockey-stick divergences, which generalize statistical distance and are also the basis of differential privacy. First, we show that resilience to bounded leakage and random probing implies resilience to our new noisy leakage model with improved parameters compared to models based on the statistical distance or mutual information. Second, we establish composition theorems for our model, showing that these connections extend to a setting where multiple leakages are obtained from a leaking implementation. We complement our theoretical results with a discussion of practical relevance, highlighting that (i) the reduction to bounded leakage applies to realistic leakage functions with noise levels that are decreased by several orders of magnitude compared to Brian et al., and (ii) the reduction to random probing usefully generalizes the seminal work of Duc, Dziembowski, and Faust, although it remains limited when the field size in which masking operates grows (i.e., hockey-stick divergences can better hide the field size dependency of the noise requirements, but do not annihilate it).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_14](https://doi.org/10.1007/978-3-031-68391-6_14)
