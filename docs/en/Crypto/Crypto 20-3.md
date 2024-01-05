# Crypto 20-3
## Two-Sided Malicious Security for Private Intersection-Sum with Cardinality.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#two-sided-malicious-security-for-private-intersection-sum-with-cardinality)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#two-sided-malicious-security-for-private-intersection-sum-with-cardinality)
### Authors
* Sarvar Patel, Google LLC, Mountain View, USA
* Mariana Raykova, Google LLC, Mountain View, USA
* Karn Seth, Google LLC, Mountain View, USA
* Moti Yung, Google LLC, Mountain View, USA
* Peihan Miao, Visa Research, Palo Alto, USA
### Abstract
> Private intersection-sum with cardinality allows two parties, where each party holds a private set and one of the parties additionally holds a private integer value associated with each element in her set, to jointly compute the cardinality of the intersection of the two sets as well as the sum of the associated integer values for all the elements in the intersection, and nothing beyond that.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_1](https://doi.org/10.1007/978-3-030-56877-1_1)
## Private Set Intersection in the Internet Setting from Lightweight Oblivious PRF.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#private-set-intersection-in-the-internet-setting-from-lightweight-oblivious-prf)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#private-set-intersection-in-the-internet-setting-from-lightweight-oblivious-prf)
### Authors
* Melissa Chase, Microsoft Research, Redmond, USA
* Peihan Miao, Visa Research, Palo Alto, USA
### Abstract
> We present a new protocol for two-party private set intersection (PSI) with semi-honest security in the plain model and one-sided malicious security in the random oracle model. Our protocol achieves a better balance between computation and communication than existing PSI protocols. Specifically, our protocol is the fastest in networks with moderate bandwidth (e.g., 30–100 Mbps). Considering the monetary cost (proposed by Pinkas et al. in CRYPTO 2019) to run the protocol on a cloud computing service, our protocol also compares favorably.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_2](https://doi.org/10.1007/978-3-030-56877-1_2)
## Multiparty Generation of an RSA Modulus.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#multiparty-generation-of-an-rsa-modulus)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#multiparty-generation-of-an-rsa-modulus)
### Authors
* Megan Chen, Northeastern University, Boston, MA, USA
* Ran Cohen, Northeastern University, Boston, MA, USA
* Jack Doerner, Northeastern University, Boston, MA, USA
* Yashvanth Kondi, Northeastern University, Boston, MA, USA
* Eysa Lee, Northeastern University, Boston, MA, USA
* Schuyler Rosefield, Northeastern University, Boston, MA, USA
* Abhi Shelat, Northeastern University, Boston, MA, USA
### Abstract
> We present a new multiparty protocol for the distributed generation of biprime RSA moduli, with security against any subset of maliciously colluding parties assuming oblivious transfer and the hardness of factoring.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_3](https://doi.org/10.1007/978-3-030-56877-1_3)
## Non-malleability Against Polynomial Tampering.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#non-malleability-against-polynomial-tampering)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#non-malleability-against-polynomial-tampering)
### Authors
* Marshall Ball, Columbia University, New York, USA
* Tal Malkin, Columbia University, New York, USA
* Eshan Chattopadhyay, Cornell University, Ithaca, USA
* Jyun-Jie Liao, Cornell University, Ithaca, USA
* Li-Yang Tan, Stanford University, Stanford, USA
### Abstract
> We present the first explicit construction of a non-malleable code that can handle tampering functions that are bounded-degree polynomials. Prior to our work, this was only known for degree-1 polynomials (affine tampering functions), due to Chattopadhyay and Li (STOC 2017). As a direct corollary, we obtain an explicit non-malleable code that is secure against tampering by bounded-size arithmetic circuits.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_4](https://doi.org/10.1007/978-3-030-56877-1_4)
## Non-malleable Secret Sharing Against Bounded Joint-Tampering Attacks in the Plain Model.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#non-malleable-secret-sharing-against-bounded-joint-tampering-attacks-in-the-plain-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#non-malleable-secret-sharing-against-bounded-joint-tampering-attacks-in-the-plain-model)
### Authors
* Gianluca Brian, Sapienza University of Rome, Rome, Italy
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
* Antonio Faonio, IMDEA Software Institute, Madrid, Spain
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Mark Simkin, Aarhus University, Aarhus, Denmark
### Abstract
> Secret sharing enables a dealer to split a secret into a set of shares, in such a way that certain authorized subsets of share holders can reconstruct the secret, whereas all unauthorized subsets cannot. Non-malleable secret sharing (Goyal and Kumar, STOC 2018) additionally requires that, even if the shares have been tampered with, the reconstructed secret is either the original or a completely unrelated one.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_5](https://doi.org/10.1007/978-3-030-56877-1_5)
## Nearly Optimal Robust Secret Sharing Against Rushing Adversaries.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#nearly-optimal-robust-secret-sharing-against-rushing-adversaries)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#nearly-optimal-robust-secret-sharing-against-rushing-adversaries)
### Authors
* Pasin Manurangsi, Google Research, Mountain View, USA
* Akshayaram Srinivasan, University of California, Berkeley, USA
* Prashant Nalini Vasudevan, University of California, Berkeley, USA
### Abstract
> Robust secret sharing is a strengthening of standard secret sharing that allows the shared secret to be recovered even if some of the shares being used in the reconstruction have been adversarially modified. In this work, we study the setting where out of all the n shares, the adversary is allowed to adaptively corrupt and modify up to t shares, where \(n = 2t+1\) (Note that if the adversary is allowed to modify any more shares, then correct reconstruction would be impossible.). Further, we deal with rushing adversaries, meaning that the adversary is allowed to see the honest parties’ shares before modifying its own shares.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_6](https://doi.org/10.1007/978-3-030-56877-1_6)
## Cryptanalytic Extraction of Neural Network Models.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#cryptanalytic-extraction-of-neural-network-models)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#cryptanalytic-extraction-of-neural-network-models)
### Authors
* Nicholas Carlini, Google, Mountain View, CA, USA
* Matthew Jagielski, Northeastern University, Boston, USA
* Ilya Mironov, Facebook, Menlo Park, USA
### Abstract
> We argue that the machine learning problem of model extraction is actually a cryptanalytic problem in disguise, and should be studied as such. Given oracle access to a neural network, we introduce a differential attack that can efficiently steal the parameters of the remote model up to floating point precision. Our attack relies on the fact that ReLU neural networks are piecewise linear functions, and thus queries at the critical points reveal information about the model parameters.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_7](https://doi.org/10.1007/978-3-030-56877-1_7)
## Automatic Verification of Differential Characteristics: Application to Reduced Gimli.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#automatic-verification-of-differential-characteristics-application-to-reduced-gimli)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#automatic-verification-of-differential-characteristics-application-to-reduced-gimli)
### Authors
* Fukang Liu, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Willi Meier, FHNW, Windisch, Switzerland
### Abstract
> Since Keccak was selected as the SHA-3 standard, more and more permutation-based primitives have been proposed. Different from block ciphers, there is no round key in the underlying permutation for permutation-based primitives. Therefore, there is a higher risk for a differential characteristic of the underlying permutation to become incompatible when considering the dependency of difference transitions over different rounds. However, in most of the MILP or SAT based models to search for differential characteristics, only the difference transitions are involved and are treated as independent in different rounds, which may cause that an invalid one is found for the underlying permutation. To overcome this obstacle, we are motivated to design a model which automatically avoids the inconsistency in the search for differential characteristics. Our technique is to involve both the difference transitions and value transitions in the constructed model. Such an idea is inspired by the algorithm to find SHA-2 characteristics as proposed by Mendel et al. in ASIACRYPT 2011, where the differential characteristic and the conforming message pair are simultaneously searched. As a first attempt, our new technique will be applied to the Gimli permutation, which was proposed in CHES 2017. As a result, we reveal that some existing differential characteristics of reduced Gimli are indeed incompatible, one of which is found in the Gimli document. In addition, since only the permutation is analyzed in the Gimli document, we are lead to carry out a comprehensive study, covering the proposed hash scheme and the authenticated encryption (AE) scheme specified for Gimli, which has become a second round candidate of the NIST lightweight cryptography standardization process. For the hash scheme, a semi-free-start (SFS) collision attack can reach up to 8 rounds starting from an intermediate round. For the AE scheme, a state recovery attack is demonstrated to achieve up to 9 rounds. It should be emphasized that our analysis does not threaten the security of Gimli.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_8](https://doi.org/10.1007/978-3-030-56877-1_8)
## The MALICIOUS Framework: Embedding Backdoors into Tweakable Block Ciphers.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#the-malicious-framework-embedding-backdoors-into-tweakable-block-ciphers)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#the-malicious-framework-embedding-backdoors-into-tweakable-block-ciphers)
### Authors
* Thomas Peyrin, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Haoyang Wang, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### Abstract
> Inserting backdoors in encryption algorithms has long seemed like a very interesting, yet difficult problem. Most attempts have been unsuccessful for symmetric-key primitives so far and it remains an open problem how to build such ciphers.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_9](https://doi.org/10.1007/978-3-030-56877-1_9)
## Cryptanalysis of the Lifted Unbalanced Oil Vinegar Signature Scheme.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#cryptanalysis-of-the-lifted-unbalanced-oil-vinegar-signature-scheme)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#cryptanalysis-of-the-lifted-unbalanced-oil-vinegar-signature-scheme)
### Authors
* Jintai Ding, University of Cincinnati, Cincinnati, OH, USA
* Joshua Deaton, University of Cincinnati, Cincinnati, OH, USA
* Kurt Schmidt, University of Cincinnati, Cincinnati, OH, USA
* Vishakha, University of Cincinnati, Cincinnati, OH, USA
* Zheng Zhang, University of Cincinnati, Cincinnati, OH, USA
### Abstract
> In 2017, Ward Beullens et al. submitted Lifted Unbalanced Oil and Vinegar (LUOV) 
[4], a signature scheme based on the famous multivariate public key cryptosystem (MPKC) called Unbalanced Oil and Vinegar (UOV), to NIST for the competition for post-quantum public key scheme standardization. The defining feature of LUOV is that, though the public key \(\mathscr {P}\) works in the extension field of degree r of \(\mathbb {F}_2\), the coefficients of \(\mathscr {P}\) come from \(\mathbb {F}_2\). This is done to significantly reduce the size of \(\mathscr {P}\). The LUOV scheme is now in the second round of the NIST PQC standardization process.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_10](https://doi.org/10.1007/978-3-030-56877-1_10)
## Out of Oddity - New Cryptanalytic Techniques Against Symmetric Primitives Optimized for Integrity Proof Systems.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#out-of-oddity-new-cryptanalytic-techniques-against-symmetric-primitives-optimized-for-integrity-proof-systems)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#out-of-oddity-new-cryptanalytic-techniques-against-symmetric-primitives-optimized-for-integrity-proof-systems)
### Authors
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Anne Canteaut, Inria, Paris, France
* Gaëtan Leurent, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
* Maria Eichlseder, Graz University of Technology, Graz, Austria
* Maria Eichlseder, Ruhr-Universität Bochum, Bochum, Germany
* Gregor Leander, Ruhr-Universität Bochum, Bochum, Germany
* Yosuke Todo, Ruhr-Universität Bochum, Bochum, Germany
* Friedrich Wiemer, Ruhr-Universität Bochum, Bochum, Germany
* Friedrich Wiemer, cryptosolutions, Essen, Germany
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Yosuke Todo, NTT Secure Platform Laboratories, Tokyo, Japan
### Abstract
> The security and performance of many integrity proof systems like SNARKs, STARKs and Bulletproofs highly depend on the underlying hash function. For this reason several new proposals have recently been developed. These primitives obviously require an in-depth security evaluation, especially since their implementation constraints have led to less standard design approaches. This work compares the security levels offered by two recent families of such primitives, namely GMiMC and HadesMiMC. We exhibit low-complexity distinguishers against the GMiMC and HadesMiMC permutations for most parameters proposed in recently launched public challenges for STARK-friendly hash functions. In the more concrete setting of the sponge construction corresponding to the practical use in the ZK-STARK protocol, we present a practical collision attack on a round-reduced version of GMiMC and a preimage attack on some instances of HadesMiMC. To achieve those results, we adapt and generalize several cryptographic techniques to fields of odd characteristic.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_11](https://doi.org/10.1007/978-3-030-56877-1_11)
## Improved Differential-Linear Attacks with Applications to ARX Ciphers.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#improved-differential-linear-attacks-with-applications-to-arx-ciphers)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#improved-differential-linear-attacks-with-applications-to-arx-ciphers)
### Authors
* Christof Beierle, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Yosuke Todo, Ruhr University Bochum, Bochum, Germany
* Yosuke Todo, NTT Secure Platform Laboratories, Tokyo, Japan
### Abstract
> We present several improvements to the framework of differential-linear attacks with a special focus on ARX ciphers. As a demonstration of their impact, we apply them to Chaskey and ChaCha and we are able to significantly improve upon the best attacks published so far.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_12](https://doi.org/10.1007/978-3-030-56877-1_12)
## Cryptanalysis Results on Spook - Bringing Full-Round Shadow-512 to the Light.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#cryptanalysis-results-on-spook-bringing-full-round-shadow-512-to-the-light)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#cryptanalysis-results-on-spook-bringing-full-round-shadow-512-to-the-light)
### Authors
* Patrick Derbez, Univ Rennes, CNRS, IRISA, Rennes, France
* Paul Huynh, Université de Lorraine, CNRS, Inria, LORIA, 54000, Nancy, France
* Virginie Lallemand, Université de Lorraine, CNRS, Inria, LORIA, 54000, Nancy, France
* María Naya-Plasencia, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
### Abstract
> Spook  
[BBB+19] is one of the 32 candidates that has made it to the second round of the NIST Lightweight Cryptography Standardization process, and is particularly interesting since it proposes differential side channel resistance. In this paper, we present practical distinguishers of the full 6-step version of the underlying permutations of Spook, namely Shadow-512 and Shadow-384, solving challenges proposed by the designers on the permutation. We also propose practical forgeries with 4-step Shadow for the S1P mode of operation in the nonce misuse scenario, which is allowed by the CIML2 security game considered by the authors. All the results presented in this paper have been implemented.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_13](https://doi.org/10.1007/978-3-030-56877-1_13)
## Cryptanalysis of LEDAcrypt.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#cryptanalysis-of-ledacrypt)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#cryptanalysis-of-ledacrypt)
### Authors
* Daniel Apon, National Institute of Standards and Technology, Gaithersburg, USA
* Ray Perlner, National Institute of Standards and Technology, Gaithersburg, USA
* Angela Robinson, National Institute of Standards and Technology, Gaithersburg, USA
* Paolo Santini, Università Politecnica delle Marche, Ancona, Italy
* Paolo Santini, Florida Atlantic University, Boca Raton, USA
### Abstract
> We report on the concrete cryptanalysis of LEDAcrypt, a 2nd Round candidate in NIST’s Post-Quantum Cryptography standardization process and one of 17 encryption schemes that remain as candidates for near-term standardization. LEDAcrypt consists of a public-key encryption scheme built from the McEliece paradigm and a key-encapsulation mechanism (KEM) built from the Niederreiter paradigm, both using a quasi-cyclic low-density parity-check (QC-LDPC) code.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_14](https://doi.org/10.1007/978-3-030-56877-1_14)
## Alzette: A 64-Bit ARX-box - (Feat. CRAX and TRAX).
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#alzette-a-64-bit-arx-box-feat-crax-and-trax)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#alzette-a-64-bit-arx-box-feat-crax-and-trax)
### Authors
* Christof Beierle, Ruhr University Bochum, Bochum, Germany
* Alex Biryukov, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Luan Cardoso dos Santos, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Johann Großschädl, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Qingju Wang, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Léo Perrin, Inria, Paris, France
* Aleksei Udovenko, CryptoExperts, Paris, France
* Vesselin Velichkov, University of Edinburgh, Edinburgh, UK
### Abstract
> S-boxes are the only source of non-linearity in many symmetric primitives. While they are often defined as being functions operating on a small space, some recent designs propose the use of much larger ones (e.g., 32 bits). In this context, an S-box is then defined as a subfunction whose cryptographic properties can be estimated precisely.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_15](https://doi.org/10.1007/978-3-030-56877-1_15)
## Order-Fairness for Byzantine Consensus.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#order-fairness-for-byzantine-consensus)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#order-fairness-for-byzantine-consensus)
### Authors
* Mahimna Kelkar, Cornell Tech, New York, USA
* Fan Zhang, Cornell Tech, New York, USA
* Steven Goldfeder, Cornell Tech, New York, USA
* Ari Juels, Cornell Tech, New York, USA
* Mahimna Kelkar, Cornell University, Ithaca, USA
* Fan Zhang, Cornell University, Ithaca, USA
* Steven Goldfeder, Cornell University, Ithaca, USA
* Ari Juels, Cornell University, Ithaca, USA
* Mahimna Kelkar, The Initiative for CryptoCurrencies & Contracts (IC3), New York, USA
* Fan Zhang, The Initiative for CryptoCurrencies & Contracts (IC3), New York, USA
* Steven Goldfeder, The Initiative for CryptoCurrencies & Contracts (IC3), New York, USA
* Ari Juels, The Initiative for CryptoCurrencies & Contracts (IC3), New York, USA
### Abstract
> Decades of research in both cryptography and distributed systems has extensively studied the problem of state machine replication, also known as Byzantine consensus. A consensus protocol must satisfy two properties: consistency and liveness. These properties ensure that honest participating nodes agree on the same log and dictate when fresh transactions get added. They fail, however, to ensure against adversarial manipulation of the actual ordering of transactions in the log. Indeed, in leader-based protocols (almost all protocols used today), malicious leaders can directly choose the final transaction ordering.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_16](https://doi.org/10.1007/978-3-030-56877-1_16)
## Generically Speeding-Up Repeated Squaring Is Equivalent to Factoring: Sharp Thresholds for All Generic-Ring Delay Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#generically-speeding-up-repeated-squaring-is-equivalent-to-factoring-sharp-thresholds-for-all-generic-ring-delay-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#generically-speeding-up-repeated-squaring-is-equivalent-to-factoring-sharp-thresholds-for-all-generic-ring-delay-functions)
### Authors
* Lior Rotem, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
### Abstract
> Despite the fundamental importance of delay functions, repeated squaring in RSA groups (Rivest, Shamir and Wagner ’96) is the only candidate offering both a useful structure and a realistic level of practicality. Somewhat unsatisfyingly, its sequentiality is provided directly by assumption (i.e., the function is assumed to be a delay function).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_17](https://doi.org/10.1007/978-3-030-56877-1_17)
## Compressed $\varSigma $-Protocol Theory and Practical Application to Plug & Play Secure Algorithmics.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#compressed-varsigma-protocol-theory-and-practical-application-to-plug-play-secure-algorithmics)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#compressed-varsigma-protocol-theory-and-practical-application-to-plug-play-secure-algorithmics)
### Authors
* Thomas Attema, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ronald Cramer, CWI, Cryptology Group, Amsterdam, The Netherlands
* Thomas Attema, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Ronald Cramer, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Thomas Attema, Cyber Security and Robustness, TNO, The Hague, The Netherlands
### Abstract
> \(\varSigma \)-Protocols provide a well-understood basis for secure algorithmics. Recently, Bulletproofs (Bootle et al., EUROCRYPT 2016, and Bünz et al., S&P 2018) have been proposed as a drop-in replacement in case of zero-knowledge (ZK) for arithmetic circuits, achieving logarithmic communication instead of linear. Its pivot is an ingenious, logarithmic-size proof of knowledge BP for certain quadratic relations. However, reducing ZK for general relations to it forces a somewhat cumbersome “reinvention” of cryptographic protocol theory.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_18](https://doi.org/10.1007/978-3-030-56877-1_18)
## A Tight Parallel Repetition Theorem for Partially Simulatable Interactive Arguments via Smooth KL-Divergence.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#a-tight-parallel-repetition-theorem-for-partially-simulatable-interactive-arguments-via-smooth-kl-divergence)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#a-tight-parallel-repetition-theorem-for-partially-simulatable-interactive-arguments-via-smooth-kl-divergence)
### Authors
* Itay Berman, MIT, Cambridge, USA
* Iftach Haitner, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Eliad Tsfadia, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
### Abstract
> Hardness amplification is a central problem in the study of interactive protocols. While “natural” parallel repetition transformation is known to reduce the soundness error of some special cases of interactive arguments: three-message protocols (Bellare, Impagliazzo, and Naor [FOCS ’97]) and public-coin protocols (Håstad, Pass, Wikström, and Pietrzak [TCC ’10], Chung and Liu [TCC ’10] and Chung and Pass [TCC ’15]), it fails to do so in the general case (the above Bellare et al.; also Pietrzak and Wikström [TCC ’07]).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_19](https://doi.org/10.1007/978-3-030-56877-1_19)
## Interactive Proofs for Social Graphs.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#interactive-proofs-for-social-graphs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#interactive-proofs-for-social-graphs)
### Authors
* Liran Katzir, Google Research, Tel Aviv, Israel
* Clara Shikhelman, Chaincode Labs, New York City, USA
* Eylon Yogev, BU and TAU, Boston, USA
### Abstract
> We consider interactive proofs for social graphs, where the verifier has only oracle access to the graph and can query for the \(i^{th}\) neighbor of a vertex v, given i and v. In this model, we construct a doubly-efficient public-coin two-message interactive protocol for estimating the size of the graph to within a multiplicative factor \(\varepsilon >0\). The verifier performs \(\widetilde{O}(1/\varepsilon ^2 \cdot \tau _{mix}\cdot \varDelta )\) queries to the graph, where \(\tau _{mix}\) is the mixing time of the graph and \(\varDelta \) is the average degree of the graph. The prover runs in quasi-linear time in the number of nodes in the graph.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_20](https://doi.org/10.1007/978-3-030-56877-1_20)
## The Measure-and-Reprogram Technique 2.0: Multi-round Fiat-Shamir and More.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#the-measure-and-reprogram-technique-2-0-multi-round-fiat-shamir-and-more)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#the-measure-and-reprogram-technique-2-0-multi-round-fiat-shamir-and-more)
### Authors
* Jelle Don, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Christian Majenz, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Christian Majenz, QuSoft, Amsterdam, The Netherlands
### Abstract
> We revisit recent works by Don, Fehr, Majenz and Schaffner and by Liu and Zhandry on the security of the Fiat-Shamir (FS) transformation of \(\varSigma \)-protocols in the quantum random oracle model (QROM). Two natural questions that arise in this context are: (1) whether the results extend to the FS transformation of multi-round interactive proofs, and (2) whether Don et al.’s \(O(q^2)\) loss in security is optimal.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_21](https://doi.org/10.1007/978-3-030-56877-1_21)
## Fiat-Shamir for Repeated Squaring with Applications to PPAD-Hardness and VDFs.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#fiat-shamir-for-repeated-squaring-with-applications-to-ppad-hardness-and-vdfs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#fiat-shamir-for-repeated-squaring-with-applications-to-ppad-hardness-and-vdfs)
### Authors
* Alex Lombardi, MIT, Cambridge, MA, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
### Abstract
> The Fiat-Shamir transform is a methodology for compiling a (public-coin) interactive proof system for a language L into a non-interactive argument system for L. Proving security of the Fiat-Shamir transform in the standard model, especially in the context of succinct arguments, is largely an unsolved problem. The work of Canetti et al. (STOC 2019) proved the security of the Fiat-Shamir transform applied to the Goldwasser-Kalai-Rothblum (STOC 2008) succinct interactive proof system under a very strong “optimal learning with errors” assumption. Achieving a similar result under standard assumptions remains an important open question.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_22](https://doi.org/10.1007/978-3-030-56877-1_22)
## Delegation with Updatable Unambiguous Proofs and PPAD-Hardness.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#delegation-with-updatable-unambiguous-proofs-and-ppad-hardness)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#delegation-with-updatable-unambiguous-proofs-and-ppad-hardness)
### Authors
* Yael Tauman Kalai, Microsoft Research, Cambridge, USA
* Omer Paneth, Tel Aviv University, Tel Aviv, Israel
* Yael Tauman Kalai, MIT, Cambridge, USA
* Lisa Yang, MIT, Cambridge, USA
### Abstract
> In this work, we construct an updatable and unambiguous delegation scheme based on the decisional assumption on bilinear groups introduced by Kalai, Paneth and Yang [STOC 2019]. Using this delegation scheme, we show PPAD-hardness (and hence the hardness of computing Nash equilibria) based on the quasi-polynomial hardness of this bilinear group assumption and any hard language that is decidable in quasi-polynomial time and polynomial space.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_23](https://doi.org/10.1007/978-3-030-56877-1_23)
## New Techniques for Zero-Knowledge: Leveraging Inefficient Provers to Reduce Assumptions, Interaction, and Trust.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#new-techniques-for-zero-knowledge-leveraging-inefficient-provers-to-reduce-assumptions-interaction-and-trust)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#new-techniques-for-zero-knowledge-leveraging-inefficient-provers-to-reduce-assumptions-interaction-and-trust)
### Authors
* Marshall Ball, Columbia University, New York City, USA
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Mukul Kulkarni, University of Massachusetts, Amherst, USA
### Abstract
> We present a transformation from NIZK with inefficient provers in the uniform random string (URS) model to ZAPs (two message witness indistinguishable proofs) with inefficient provers. While such a transformation was known for the case where the prover is efficient, the security proof breaks down if the prover is inefficient. Our transformation is obtained via new applications of Nisan-Wigderson designs, a combinatorial object originally introduced in the derandomization literature.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_24](https://doi.org/10.1007/978-3-030-56877-1_24)
## Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#spartan-efficient-and-general-purpose-zksnarks-without-trusted-setup)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#spartan-efficient-and-general-purpose-zksnarks-without-trusted-setup)
### Authors
* Srinath Setty, Microsoft Research, Redmond, USA
### Abstract
> This paper introduces Spartan, a new family of zero-knowledge succinct non-interactive arguments of knowledge (zkSNARKs) for the rank-1 constraint satisfiability (R1CS), an NP-complete language that generalizes arithmetic circuit satisfiability. A distinctive feature of Spartan is that it offers the first zkSNARKs without trusted setup (i.e., transparent zkSNARKs) for NP where verifying a proof incurs sub-linear costs—without requiring uniformity in the NP statement’s structure. Furthermore, Spartan offers zkSNARKs with a time-optimal prover, a property that has remained elusive for nearly all zkSNARKs in the literature.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_25](https://doi.org/10.1007/978-3-030-56877-1_25)
## NIZK from LPN and Trapdoor Hash via Correlation Intractability for Approximable Relations.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#nizk-from-lpn-and-trapdoor-hash-via-correlation-intractability-for-approximable-relations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#nizk-from-lpn-and-trapdoor-hash-via-correlation-intractability-for-approximable-relations)
### Authors
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Venkata Koppula, Weizmann Institute of Science, Rehovot, Israel
* Tamer Mour, Weizmann Institute of Science, Rehovot, Israel
### Abstract
> We present new non-interactive zero-knowledge argument systems (NIZK), based on standard assumptions that were previously not known to imply it. In particular, we rely on the hardness of both the learning parity with noise (LPN) assumption, and the existence of trapdoor hash functions (TDH, defined by Döttling et al., Crypto 2019). Such TDH can be based on a number of standard assumptions, including DDH, QR, DCR, and LWE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_26](https://doi.org/10.1007/978-3-030-56877-1_26)
## Shorter Non-interactive Zero-Knowledge Arguments and ZAPs for Algebraic Languages.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#shorter-non-interactive-zero-knowledge-arguments-and-zaps-for-algebraic-languages)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#shorter-non-interactive-zero-knowledge-arguments-and-zaps-for-algebraic-languages)
### Authors
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Dominik Hartmann, Ruhr-University Bochum, Bochum, Germany
### Abstract
> We put forth a new framework for building pairing-based non-interactive zero-knowledge (\(\mathsf {NIZK}\)) arguments for a wide class of algebraic languages, which are an extension of linear languages, containing disjunctions of linear languages and more. Our approach differs from the Groth-Sahai methodology, in that we rely on pairings to compile a \(\varSigma \)-protocol into a \(\mathsf {NIZK}\). Our framework enjoys a number of interesting features:

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_27](https://doi.org/10.1007/978-3-030-56877-1_27)
## Non-interactive Zero-Knowledge Arguments for QMA, with Preprocessing.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-3.md#non-interactive-zero-knowledge-arguments-for-qma-with-preprocessing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-3.md#non-interactive-zero-knowledge-arguments-for-qma-with-preprocessing)
### Authors
* Andrea Coladangelo, Computing and Mathematical Sciences, Caltech, Pasadena, USA
* Thomas Vidick, Computing and Mathematical Sciences, Caltech, Pasadena, USA
* Tina Zhang, Computing and Mathematical Sciences, Caltech, Pasadena, USA
### Abstract
> A non-interactive zero-knowledge (NIZK) proof system for a language \(L\in \text {NP} \) allows a prover (who is provided with an instance \(x \in L\), and a witness w for x) to compute a classical certificate \(\pi \) for the claim that \(x\in L\) such that \(\pi \) has the following properties: 1) \(\pi \) can be verified efficiently, and 2) \(\pi \) does not reveal any information about w, besides the fact that it exists (i.e. that \(x \in L\)). NIZK proof systems have recently been shown to exist for all languages in \(\text {NP} \) in the common reference string (CRS) model and under the learning with errors (LWE) assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_28](https://doi.org/10.1007/978-3-030-56877-1_28)
