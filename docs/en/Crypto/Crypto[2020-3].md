# Crypto[2020-3]
## Two-Sided Malicious Security for Private Intersection-Sum with Cardinality.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#two-sided-malicious-security-for-private-intersection-sum-with-cardinality)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#two-sided-malicious-security-for-private-intersection-sum-with-cardinality)
### Authors
* Sarvar Patel, Google LLC, Mountain View, USA
* Mariana Raykova, Google LLC, Mountain View, USA
* Karn Seth, Google LLC, Mountain View, USA
* Moti Yung, Google LLC, Mountain View, USA
* Peihan Miao, Visa Research, Palo Alto, USA
### Abstract
> Private intersection-sum with cardinality allows two parties, where each party holds a private set and one of the parties additionally holds a private integer value associated with each element in her set, to jointly compute the cardinality of the intersection of the two sets as well as the sum of the associated integer values for all the elements in the intersection, and nothing beyond that.
> 
> We present a new construction for private intersection sum with cardinality that provides malicious security with abort and guarantees that both parties receive the output upon successful completion of the protocol. A central building block for our constructions is a primitive called shuffled distributed oblivious PRF (DOPRF), which is a PRF that offers oblivious evaluation using a secret key shared between two parties, and in addition to this allows obliviously permuting the PRF outputs of several parallel oblivious evaluations. We present the first construction for shuffled DOPRF with malicious security. We further present several new sigma proof protocols for relations across Pedersen commitments, ElGamal encryptions, and Camenisch-Shoup encryptions that we use in our main construction, for which we develop new batching techniques to reduce communication.
> 
> We implement and evaluate the efficiency of our protocol and show that we can achieve communication cost that is only \(4{-}5{\times }\) greater than the most efficient semi-honest protocol. When measuring monetary cost of executing the protocol in the cloud, our protocol is \(25{\times }\) more expensive than the semi-honest protocol. Our construction also allows for different parameter regimes that enable trade-offs between communication and computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_1](https://doi.org/10.1007/978-3-030-56877-1_1)
## Private Set Intersection in the Internet Setting from Lightweight Oblivious PRF.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#private-set-intersection-in-the-internet-setting-from-lightweight-oblivious-prf)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#private-set-intersection-in-the-internet-setting-from-lightweight-oblivious-prf)
### Authors
* Melissa Chase, Microsoft Research, Redmond, USA
* Peihan Miao, Visa Research, Palo Alto, USA
### Abstract
> We present a new protocol for two-party private set intersection (PSI) with semi-honest security in the plain model and one-sided malicious security in the random oracle model. Our protocol achieves a better balance between computation and communication than existing PSI protocols. Specifically, our protocol is the fastest in networks with moderate bandwidth (e.g., 30–100 Mbps). Considering the monetary cost (proposed by Pinkas et al. in CRYPTO 2019) to run the protocol on a cloud computing service, our protocol also compares favorably.
> 
> Underlying our PSI protocol is a new lightweight multi-point oblivious pesudorandom function (OPRF) protocol based on oblivious transfer (OT) extension. We believe this new protocol may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_2](https://doi.org/10.1007/978-3-030-56877-1_2)
## Multiparty Generation of an RSA Modulus.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#multiparty-generation-of-an-rsa-modulus)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#multiparty-generation-of-an-rsa-modulus)
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
> 
> Our protocol is highly modular, and its uppermost layer can be viewed as a template that generalizes the structure of prior works and leads to a simpler security proof. We introduce a combined sampling-and-sieving technique that eliminates both the inherent leakage in the approach of Frederiksen et al. (Crypto’18), and the dependence upon additively homomorphic encryption in the approach of Hazay et al. (JCrypt’19). We combine this technique with an efficient, privacy-free check to detect malicious behavior retroactively when a sampled candidate is not a biprime, and thereby overcome covert rejection-sampling attacks and achieve both asymptotic and concrete efficiency improvements over the previous state of the art.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_3](https://doi.org/10.1007/978-3-030-56877-1_3)
## Non-malleability Against Polynomial Tampering.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#non-malleability-against-polynomial-tampering)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#non-malleability-against-polynomial-tampering)
### Authors
* Marshall Ball, Columbia University, New York, USA
* Tal Malkin, Columbia University, New York, USA
* Eshan Chattopadhyay, Cornell University, Ithaca, USA
* Jyun-Jie Liao, Cornell University, Ithaca, USA
* Li-Yang Tan, Stanford University, Stanford, USA
### Abstract
> We present the first explicit construction of a non-malleable code that can handle tampering functions that are bounded-degree polynomials. Prior to our work, this was only known for degree-1 polynomials (affine tampering functions), due to Chattopadhyay and Li (STOC 2017). As a direct corollary, we obtain an explicit non-malleable code that is secure against tampering by bounded-size arithmetic circuits.
> 
> We show applications of our non-malleable code in constructing non-malleable secret sharing schemes that are robust against bounded-degree polynomial tampering. In fact our result is stronger: we can handle adversaries that can adaptively choose the polynomial tampering function based on initial leakage of a bounded number of shares.
> 
> Our results are derived from explicit constructions of seedless non-malleable extractors that can handle bounded-degree polynomial tampering functions. Prior to our work, no such result was known even for degree-2 (quadratic) polynomials.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_4](https://doi.org/10.1007/978-3-030-56877-1_4)
## Non-malleable Secret Sharing Against Bounded Joint-Tampering Attacks in the Plain Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#non-malleable-secret-sharing-against-bounded-joint-tampering-attacks-in-the-plain-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#non-malleable-secret-sharing-against-bounded-joint-tampering-attacks-in-the-plain-model)
### Authors
* Gianluca Brian, Sapienza University of Rome, Rome, Italy
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
* Antonio Faonio, IMDEA Software Institute, Madrid, Spain
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Mark Simkin, Aarhus University, Aarhus, Denmark
### Abstract
> Secret sharing enables a dealer to split a secret into a set of shares, in such a way that certain authorized subsets of share holders can reconstruct the secret, whereas all unauthorized subsets cannot. Non-malleable secret sharing (Goyal and Kumar, STOC 2018) additionally requires that, even if the shares have been tampered with, the reconstructed secret is either the original or a completely unrelated one.
> 
> In this work, we construct non-malleable secret sharing tolerating \(p\)-time joint-tampering attacks in the plain model (in the computational setting), where the latter means that, for any \(p>0\) fixed a priori, the attacker can tamper with the same target secret sharing up to \(p\) times. In particular, assuming one-to-one one-way functions, we obtain:
> 
> A secret sharing scheme for threshold access structures which tolerates joint \(p\)-time tampering with subsets of the shares of maximal size (i.e., matching the privacy threshold of the scheme). This holds in a model where the attacker commits to a partition of the shares into non-overlapping subsets, and keeps tampering jointly with the shares within such a partition (so-called selective partitioning).
> 
> A secret sharing scheme for general access structures which tolerates joint \(p\)-time tampering with subsets of the shares of size \(O(\sqrt{\log n})\), where \(n\) is the number of parties. This holds in a stronger model where the attacker is allowed to adaptively change the partition within each tampering query, under the restriction that once a subset of the shares has been tampered with jointly, that subset is always either tampered jointly or not modified by other tampering queries (so-called semi-adaptive partitioning).
> 
> At the heart of our result for selective partitioning lies a new technique showing that every one-time statistically non-malleable secret sharing against joint tampering is in fact leakage-resilient non-malleable (i.e., the attacker can leak jointly from the shares prior to tampering). We believe this may be of independent interest, and in fact we show it implies lower bounds on the share size and randomness complexity of statistically non-malleable secret sharing against independent tampering.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_5](https://doi.org/10.1007/978-3-030-56877-1_5)
## Nearly Optimal Robust Secret Sharing Against Rushing Adversaries.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#nearly-optimal-robust-secret-sharing-against-rushing-adversaries)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#nearly-optimal-robust-secret-sharing-against-rushing-adversaries)
### Authors
* Pasin Manurangsi, Google Research, Mountain View, USA
* Akshayaram Srinivasan, University of California, Berkeley, USA
* Prashant Nalini Vasudevan, University of California, Berkeley, USA
### Abstract
> Robust secret sharing is a strengthening of standard secret sharing that allows the shared secret to be recovered even if some of the shares being used in the reconstruction have been adversarially modified. In this work, we study the setting where out of all the n shares, the adversary is allowed to adaptively corrupt and modify up to t shares, where \(n = 2t+1\) (Note that if the adversary is allowed to modify any more shares, then correct reconstruction would be impossible.). Further, we deal with rushing adversaries, meaning that the adversary is allowed to see the honest parties’ shares before modifying its own shares.
> 
> It is known that when \(n = 2t+1\), to share a secret of length m bits and recover it with error less than \(2^{-\lambda }\), shares of size at least \(m+\lambda \) bits are needed. Recently, Bishop, Pastro, Rajaraman, and Wichs (EUROCRYPT 2016) constructed a robust secret sharing scheme with shares of size \(m + O(\lambda \cdot \mathrm{polylog}(n,m,\lambda ))\) bits that is secure in this setting against non-rushing adversaries. Later, Fehr and Yuan (EUROCRYPT 2019) constructed a scheme that is secure against rushing adversaries, but has shares of size \(m\,+\,O(\lambda \cdot n^{{\varepsilon }}\cdot \mathrm{polylog}(n,m,\lambda ))\) bits for an arbitrary constant \({\varepsilon }> 0\). They also showed a variant of their construction with share size \(m + O(\lambda \cdot \mathrm{polylog}(n,m,\lambda ))\) bits, but with super-polynomial reconstruction time.
> 
> We present a robust secret sharing scheme that is simultaneously close-to-optimal in all of these respects – it is secure against rushing adversaries, has shares of size \(m\,+\,O(\lambda \log {n} (\log {n}+\log {m}))\) bits, and has polynomial-time sharing and reconstruction. Central to our construction is a polynomial-time algorithm for a problem on semi-random graphs that arises naturally in the paradigm of local authentication of shares used by us and in the aforementioned work.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_6](https://doi.org/10.1007/978-3-030-56877-1_6)
## Cryptanalytic Extraction of Neural Network Models.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#cryptanalytic-extraction-of-neural-network-models)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#cryptanalytic-extraction-of-neural-network-models)
### Authors
* Nicholas Carlini, Google, Mountain View, CA, USA
* Matthew Jagielski, Northeastern University, Boston, USA
* Ilya Mironov, Facebook, Menlo Park, USA
### Abstract
> We argue that the machine learning problem of model extraction is actually a cryptanalytic problem in disguise, and should be studied as such. Given oracle access to a neural network, we introduce a differential attack that can efficiently steal the parameters of the remote model up to floating point precision. Our attack relies on the fact that ReLU neural networks are piecewise linear functions, and thus queries at the critical points reveal information about the model parameters.
> 
> We evaluate our attack on multiple neural network models and extract models that are \(2^{20}\) times more precise and require \(100{\times }\) fewer queries than prior work. For example, we extract a 100, 000 parameter neural network trained on the MNIST digit recognition task with \(2^{21.5}\) queries in under an hour, such that the extracted model agrees with the oracle on all inputs up to a worst-case error of \(2^{-25}\), or a model with 4, 000 parameters in \(2^{18.5}\) queries with worst-case error of \(2^{-40.4}\). Code is available at https://github.com/google-research/cryptanalytic-model-extraction.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_7](https://doi.org/10.1007/978-3-030-56877-1_7)
## Automatic Verification of Differential Characteristics: Application to Reduced Gimli.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#automatic-verification-of-differential-characteristics-application-to-reduced-gimli)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#automatic-verification-of-differential-characteristics-application-to-reduced-gimli)
### Authors
* Fukang Liu, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Willi Meier, FHNW, Windisch, Switzerland
### Abstract
> Since Keccak was selected as the SHA-3 standard, more and more permutation-based primitives have been proposed. Different from block ciphers, there is no round key in the underlying permutation for permutation-based primitives. Therefore, there is a higher risk for a differential characteristic of the underlying permutation to become incompatible when considering the dependency of difference transitions over different rounds. However, in most of the MILP or SAT based models to search for differential characteristics, only the difference transitions are involved and are treated as independent in different rounds, which may cause that an invalid one is found for the underlying permutation. To overcome this obstacle, we are motivated to design a model which automatically avoids the inconsistency in the search for differential characteristics. Our technique is to involve both the difference transitions and value transitions in the constructed model. Such an idea is inspired by the algorithm to find SHA-2 characteristics as proposed by Mendel et al. in ASIACRYPT 2011, where the differential characteristic and the conforming message pair are simultaneously searched. As a first attempt, our new technique will be applied to the Gimli permutation, which was proposed in CHES 2017. As a result, we reveal that some existing differential characteristics of reduced Gimli are indeed incompatible, one of which is found in the Gimli document. In addition, since only the permutation is analyzed in the Gimli document, we are lead to carry out a comprehensive study, covering the proposed hash scheme and the authenticated encryption (AE) scheme specified for Gimli, which has become a second round candidate of the NIST lightweight cryptography standardization process. For the hash scheme, a semi-free-start (SFS) collision attack can reach up to 8 rounds starting from an intermediate round. For the AE scheme, a state recovery attack is demonstrated to achieve up to 9 rounds. It should be emphasized that our analysis does not threaten the security of Gimli.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_8](https://doi.org/10.1007/978-3-030-56877-1_8)
## The MALICIOUS Framework: Embedding Backdoors into Tweakable Block Ciphers.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#the-malicious-framework-embedding-backdoors-into-tweakable-block-ciphers)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#the-malicious-framework-embedding-backdoors-into-tweakable-block-ciphers)
### Authors
* Thomas Peyrin, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Haoyang Wang, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### Abstract
> Inserting backdoors in encryption algorithms has long seemed like a very interesting, yet difficult problem. Most attempts have been unsuccessful for symmetric-key primitives so far and it remains an open problem how to build such ciphers.
> 
> In this work, we propose the MALICIOUS framework, a new method to build tweakable block ciphers that have backdoors hidden which allows to retrieve the secret key. Our backdoor is differential in nature: a specific related-tweak differential path with high probability is hidden during the design phase of the cipher. We explain how any entity knowing the backdoor can practically recover the secret key of a user and we also argue why even knowing the presence of the backdoor and the workings of the cipher will not permit to retrieve the backdoor for an external user. We analyze the security of our construction in the classical black-box model and we show that retrieving the backdoor (the hidden high-probability differential path) is very difficult.
> 
> We instantiate our framework by proposing the LowMC-M construction, a new family of tweakable block ciphers based on instances of the LowMC cipher, which allow such backdoor embedding. Generating LowMC-M instances is trivial and the LowMC-M family has basically the same efficiency as the LowMC instances it is based on.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_9](https://doi.org/10.1007/978-3-030-56877-1_9)
## Cryptanalysis of the Lifted Unbalanced Oil Vinegar Signature Scheme.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#cryptanalysis-of-the-lifted-unbalanced-oil-vinegar-signature-scheme)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#cryptanalysis-of-the-lifted-unbalanced-oil-vinegar-signature-scheme)
### Authors
* Jintai Ding, University of Cincinnati, Cincinnati, OH, USA
* Joshua Deaton, University of Cincinnati, Cincinnati, OH, USA
* Kurt Schmidt, University of Cincinnati, Cincinnati, OH, USA
* Vishakha, University of Cincinnati, Cincinnati, OH, USA
* Zheng Zhang, University of Cincinnati, Cincinnati, OH, USA
### Abstract
> In 2017, Ward Beullens et al. submitted Lifted Unbalanced Oil and Vinegar (LUOV) [4], a signature scheme based on the famous multivariate public key cryptosystem (MPKC) called Unbalanced Oil and Vinegar (UOV), to NIST for the competition for post-quantum public key scheme standardization. The defining feature of LUOV is that, though the public key \(\mathscr {P}\) works in the extension field of degree r of \(\mathbb {F}_2\), the coefficients of \(\mathscr {P}\) come from \(\mathbb {F}_2\). This is done to significantly reduce the size of \(\mathscr {P}\). The LUOV scheme is now in the second round of the NIST PQC standardization process.
> 
> In this paper we introduce a new attack on LUOV. It exploits the “lifted” structure of LUOV to reduce direct attacks on it to those over a subfield. We show that this reduces the complexity below the targeted security for the NIST post-quantum standardization competition.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_10](https://doi.org/10.1007/978-3-030-56877-1_10)
## Out of Oddity - New Cryptanalytic Techniques Against Symmetric Primitives Optimized for Integrity Proof Systems.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#out-of-oddity-new-cryptanalytic-techniques-against-symmetric-primitives-optimized-for-integrity-proof-systems)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#out-of-oddity-new-cryptanalytic-techniques-against-symmetric-primitives-optimized-for-integrity-proof-systems)
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
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#improved-differential-linear-attacks-with-applications-to-arx-ciphers)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#improved-differential-linear-attacks-with-applications-to-arx-ciphers)
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
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#cryptanalysis-results-on-spook-bringing-full-round-shadow-512-to-the-light)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#cryptanalysis-results-on-spook-bringing-full-round-shadow-512-to-the-light)
### Authors
* Patrick Derbez, Univ Rennes, CNRS, IRISA, Rennes, France
* Paul Huynh, Université de Lorraine, CNRS, Inria, LORIA, 54000, Nancy, France
* Virginie Lallemand, Université de Lorraine, CNRS, Inria, LORIA, 54000, Nancy, France
* María Naya-Plasencia, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
### Abstract
> Spook [BBB+19] is one of the 32 candidates that has made it to the second round of the NIST Lightweight Cryptography Standardization process, and is particularly interesting since it proposes differential side channel resistance. In this paper, we present practical distinguishers of the full 6-step version of the underlying permutations of Spook, namely Shadow-512 and Shadow-384, solving challenges proposed by the designers on the permutation. We also propose practical forgeries with 4-step Shadow for the S1P mode of operation in the nonce misuse scenario, which is allowed by the CIML2 security game considered by the authors. All the results presented in this paper have been implemented.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_13](https://doi.org/10.1007/978-3-030-56877-1_13)
## Cryptanalysis of LEDAcrypt.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#cryptanalysis-of-ledacrypt)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#cryptanalysis-of-ledacrypt)
### Authors
* Daniel Apon, National Institute of Standards and Technology, Gaithersburg, USA
* Ray Perlner, National Institute of Standards and Technology, Gaithersburg, USA
* Angela Robinson, National Institute of Standards and Technology, Gaithersburg, USA
* Paolo Santini, Università Politecnica delle Marche, Ancona, Italy
* Paolo Santini, Florida Atlantic University, Boca Raton, USA
### Abstract
> We report on the concrete cryptanalysis of LEDAcrypt, a 2nd Round candidate in NIST’s Post-Quantum Cryptography standardization process and one of 17 encryption schemes that remain as candidates for near-term standardization. LEDAcrypt consists of a public-key encryption scheme built from the McEliece paradigm and a key-encapsulation mechanism (KEM) built from the Niederreiter paradigm, both using a quasi-cyclic low-density parity-check (QC-LDPC) code.
> 
> In this work, we identify a large class of extremely weak keys and provide an algorithm to recover them. For example, we demonstrate how to recover 1 in \(2^{47.72}\) of LEDAcrypt’s keys using only \(2^{18.72}\) guesses at the 256-bit security level. This is a major, practical break of LEDAcrypt. Further, we demonstrate a continuum of progressively less weak keys (from extremely weak keys up to all keys) that can be recovered in substantially less work than previously known. This demonstrates that the imperfection of LEDAcrypt is fundamental to the system’s design.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_14](https://doi.org/10.1007/978-3-030-56877-1_14)
## Alzette: A 64-Bit ARX-box - (Feat. CRAX and TRAX).
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#alzette-a-64-bit-arx-box-feat-crax-and-trax)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#alzette-a-64-bit-arx-box-feat-crax-and-trax)
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
> 
> We present a 64-bit ARX-based S-box called Alzette, which can be evaluated in constant time using only 12 instructions on modern CPUs. Its parallel application can also leverage vector (SIMD) instructions. One iteration of Alzette has differential and linear properties comparable to those of the AES S-box, and two are at least as secure as the AES super S-box. As the state size is much larger than the typical 4 or 8 bits, the study of the relevant cryptographic properties of Alzette is not trivial.
> 
> We further discuss how such wide S-boxes could be used to construct round functions of 64-, 128- and 256-bit (tweakable) block ciphers with good cryptographic properties that are guaranteed even in the related-tweak setting. We use these structures to design a very lightweight 64-bit block cipher (Crax) which outperforms SPECK-64/128 for short messages on micro-controllers, and a 256-bit tweakable block cipher (Trax) which can be used to obtain strong security guarantees against powerful adversaries (nonce misuse, quantum attacks).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_15](https://doi.org/10.1007/978-3-030-56877-1_15)
## Order-Fairness for Byzantine Consensus.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#order-fairness-for-byzantine-consensus)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#order-fairness-for-byzantine-consensus)
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
> 
> To rectify this problem, we propose a third consensus property: transaction order-fairness. We initiate the first formal investigation of order-fairness and explain its fundamental importance. We provide several natural definitions for order-fairness and analyze the assumptions necessary to realize them.
> 
> We also propose a new class of consensus protocols called Aequitas. Aequitas protocols are the first to achieve order-fairness in addition to consistency and liveness. They can be realized in a black-box way using existing broadcast and agreement primitives (or indeed using any consensus protocol), and work in both synchronous and asynchronous network models.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_16](https://doi.org/10.1007/978-3-030-56877-1_16)
## Generically Speeding-Up Repeated Squaring Is Equivalent to Factoring: Sharp Thresholds for All Generic-Ring Delay Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#generically-speeding-up-repeated-squaring-is-equivalent-to-factoring-sharp-thresholds-for-all-generic-ring-delay-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#generically-speeding-up-repeated-squaring-is-equivalent-to-factoring-sharp-thresholds-for-all-generic-ring-delay-functions)
### Authors
* Lior Rotem, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
### Abstract
> Despite the fundamental importance of delay functions, repeated squaring in RSA groups (Rivest, Shamir and Wagner ’96) is the only candidate offering both a useful structure and a realistic level of practicality. Somewhat unsatisfyingly, its sequentiality is provided directly by assumption (i.e., the function is assumed to be a delay function).
> 
> We prove sharp thresholds on the sequentiality of all generic-ring delay functions relative to an RSA modulus based on the hardness of factoring in the standard model. In particular, we show that generically speeding-up repeated squaring (even with a preprocessing stage and any polynomial number parallel processors) is equivalent to factoring.
> 
> More generally, based on the (essential) hardness of factoring, we prove that any generic-ring function is in fact a delay function, admitting a sharp sequentiality threshold that is determined by our notion of sequentiality depth. Moreover, we show that generic-ring functions admit not only sharp sequentiality thresholds, but also sharp pseudorandomness thresholds.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_17](https://doi.org/10.1007/978-3-030-56877-1_17)
## Compressed $\varSigma $-Protocol Theory and Practical Application to Plug & Play Secure Algorithmics.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#compressed-varsigma-protocol-theory-and-practical-application-to-plug-play-secure-algorithmics)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#compressed-varsigma-protocol-theory-and-practical-application-to-plug-play-secure-algorithmics)
### Authors
* Thomas Attema, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ronald Cramer, CWI, Cryptology Group, Amsterdam, The Netherlands
* Thomas Attema, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Ronald Cramer, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Thomas Attema, Cyber Security and Robustness, TNO, The Hague, The Netherlands
### Abstract
> \(\varSigma \)-Protocols provide a well-understood basis for secure algorithmics. Recently, Bulletproofs (Bootle et al., EUROCRYPT 2016, and Bünz et al., S&P 2018) have been proposed as a drop-in replacement in case of zero-knowledge (ZK) for arithmetic circuits, achieving logarithmic communication instead of linear. Its pivot is an ingenious, logarithmic-size proof of knowledge BP for certain quadratic relations. However, reducing ZK for general relations to it forces a somewhat cumbersome “reinvention” of cryptographic protocol theory.
> 
> We take a rather different viewpoint and reconcile Bulletproofs with \(\varSigma \)-Protocol Theory such that (a) simpler circuit ZK is developed within established theory, while (b) achieving exactly the same logarithmic communication.
> 
> The natural key here is linearization. First, we repurpose BPs as a blackbox compression mechanism for standard \(\varSigma \)-Protocols handling ZK proofs of general linear relations (on compactly committed secret vectors); our pivot. Second, we reduce the case of general nonlinear relations to blackbox applications of our pivot via a novel variation on arithmetic secret sharing based techniques for \(\varSigma \)-Protocols (Cramer et al., ICITS 2012). Orthogonally, we enhance versatility by enabling scenarios not previously addressed, e.g., when a secret input is dispersed across several commitments. Standard implementation platforms leading to logarithmic communication follow from a Discrete-Log assumption or a generalized Strong-RSA assumption. Also, under a Knowledge-of-Exponent Assumption (KEA) communication drops to constant, as in ZK-SNARKS.
> 
> All in all, our theory should more generally be useful for modular (“plug & play”) design of practical cryptographic protocols; this is further evidenced by our separate work (2020) on proofs of partial knowledge.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_18](https://doi.org/10.1007/978-3-030-56877-1_18)
## A Tight Parallel Repetition Theorem for Partially Simulatable Interactive Arguments via Smooth KL-Divergence.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#a-tight-parallel-repetition-theorem-for-partially-simulatable-interactive-arguments-via-smooth-kl-divergence)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#a-tight-parallel-repetition-theorem-for-partially-simulatable-interactive-arguments-via-smooth-kl-divergence)
### Authors
* Itay Berman, MIT, Cambridge, USA
* Iftach Haitner, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Eliad Tsfadia, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
### Abstract
> Hardness amplification is a central problem in the study of interactive protocols. While “natural” parallel repetition transformation is known to reduce the soundness error of some special cases of interactive arguments: three-message protocols (Bellare, Impagliazzo, and Naor [FOCS ’97]) and public-coin protocols (Håstad, Pass, Wikström, and Pietrzak [TCC ’10], Chung and Liu [TCC ’10] and Chung and Pass [TCC ’15]), it fails to do so in the general case (the above Bellare et al.; also Pietrzak and Wikström [TCC ’07]).
> 
> The only known round-preserving approach that applies to all interactive arguments is Haitner’s random-terminating transformation [SICOMP ’13], who showed that the parallel repetition of the transformed protocol reduces the soundness error at a weak exponential rate: if the original m-round protocol has soundness error \(1-\varepsilon \), then the n-parallel repetition of its random-terminating variant has soundness error \((1-\varepsilon )^{\varepsilon n{/}m^4}\) (omitting constant factors). Håstad et al. have generalized this result to partially simulatable interactive arguments, showing that the n-fold repetition of an m-round \(\delta \)-simulatable argument of soundness error \(1-\varepsilon \) has soundness error \((1-\varepsilon )^{\varepsilon \delta ^2 n{/}m^2}\). When applied to random-terminating arguments, the Håstad et al. bound matches that of Haitner.
> 
> In this work we prove that parallel repetition of random-terminating arguments reduces the soundness error at a much stronger exponential rate: the soundness error of the n parallel repetition is \((1-\varepsilon )^{n{/}m}\), only an m factor from the optimal rate of \((1-\varepsilon )^n\) achievable in public-coin and three-message arguments. The result generalizes to \(\delta \)-simulatable arguments, for which we prove a bound of \((1-\varepsilon )^{\delta n{/}m}\). This is achieved by presenting a tight bound on a relaxed variant of the KL-divergence between the distribution induced by our reduction and its ideal variant, a result whose scope extends beyond parallel repetition proofs. We prove the tightness of the above bound for random-terminating arguments, by presenting a matching protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_19](https://doi.org/10.1007/978-3-030-56877-1_19)
## Interactive Proofs for Social Graphs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#interactive-proofs-for-social-graphs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#interactive-proofs-for-social-graphs)
### Authors
* Liran Katzir, Google Research, Tel Aviv, Israel
* Clara Shikhelman, Chaincode Labs, New York City, USA
* Eylon Yogev, BU and TAU, Boston, USA
### Abstract
> We consider interactive proofs for social graphs, where the verifier has only oracle access to the graph and can query for the \(i^{th}\) neighbor of a vertex v, given i and v. In this model, we construct a doubly-efficient public-coin two-message interactive protocol for estimating the size of the graph to within a multiplicative factor \(\varepsilon >0\). The verifier performs \(\widetilde{O}(1/\varepsilon ^2 \cdot \tau _{mix}\cdot \varDelta )\) queries to the graph, where \(\tau _{mix}\) is the mixing time of the graph and \(\varDelta \) is the average degree of the graph. The prover runs in quasi-linear time in the number of nodes in the graph.
> 
> Furthermore, we develop a framework for computing the quantiles of essentially any (reasonable) function f of vertices/edges of the graph. Using this framework, we can estimate many health measures of social graphs such as the clustering coefficients and the average degree, where the verifier performs only a small number of queries to the graph.
> 
> Using the Fiat-Shamir paradigm, we are able to transform the above protocols to a non-interactive argument in the random oracle model. The result is that social media companies (e.g., Facebook, Twitter, etc.) can publish, once and for all, a short proof for the size or health of their social network. This proof can be publicly verified by any single user using a small number of queries to the graph.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_20](https://doi.org/10.1007/978-3-030-56877-1_20)
## The Measure-and-Reprogram Technique 2.0: Multi-round Fiat-Shamir and More.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#the-measure-and-reprogram-technique-2-0-multi-round-fiat-shamir-and-more)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#the-measure-and-reprogram-technique-2-0-multi-round-fiat-shamir-and-more)
### Authors
* Jelle Don, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Christian Majenz, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Christian Majenz, QuSoft, Amsterdam, The Netherlands
### Abstract
> We revisit recent works by Don, Fehr, Majenz and Schaffner and by Liu and Zhandry on the security of the Fiat-Shamir (FS) transformation of \(\varSigma \)-protocols in the quantum random oracle model (QROM). Two natural questions that arise in this context are: (1) whether the results extend to the FS transformation of multi-round interactive proofs, and (2) whether Don et al.’s \(O(q^2)\) loss in security is optimal.
> 
> Firstly, we answer question (1) in the affirmative. As a byproduct of solving a technical difficulty in proving this result, we slightly improve the result of Don et al., equipping it with a cleaner bound and an even simpler proof. We apply our result to digital signature schemes showing that it can be used to prove strong security for schemes like MQDSS in the QROM. As another application we prove QROM-security of a non-interactive OR proof by Liu, Wei and Wong.
> 
> As for question (2), we show via a Grover-search based attack that Don et al.’s quadratic security loss for the FS transformation of \(\varSigma \)-protocols is optimal up to a small constant factor. This extends to our new multi-round result, proving it tight up to a factor depending on the number of rounds only, i.e. is constant for constant-round interactive proofs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_21](https://doi.org/10.1007/978-3-030-56877-1_21)
## Fiat-Shamir for Repeated Squaring with Applications to PPAD-Hardness and VDFs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#fiat-shamir-for-repeated-squaring-with-applications-to-ppad-hardness-and-vdfs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#fiat-shamir-for-repeated-squaring-with-applications-to-ppad-hardness-and-vdfs)
### Authors
* Alex Lombardi, MIT, Cambridge, MA, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
### Abstract
> The Fiat-Shamir transform is a methodology for compiling a (public-coin) interactive proof system for a language L into a non-interactive argument system for L. Proving security of the Fiat-Shamir transform in the standard model, especially in the context of succinct arguments, is largely an unsolved problem. The work of Canetti et al. (STOC 2019) proved the security of the Fiat-Shamir transform applied to the Goldwasser-Kalai-Rothblum (STOC 2008) succinct interactive proof system under a very strong “optimal learning with errors” assumption. Achieving a similar result under standard assumptions remains an important open question.
> 
> In this work, we consider the problem of compiling a different succinct interactive proof system: Pietrzak’s proof system (ITCS 2019) for the iterated squaring problem. We construct a hash function family (with evaluation time roughly \(2^{\lambda ^{\epsilon }}\)) that guarantees the soundness of Fiat-Shamir for this protocol assuming the sub-exponential (\(2^{-n^{1-\epsilon }}\))-hardness of the n-dimensional learning with errors problem. (The latter follows from the worst-case \(2^{n^{1-\epsilon }}\) hardness of lattice problems.) More generally, we extend the “bad-challenge function” methodology of Canetti et al. for proving the soundness of Fiat-Shamir to a class of protocols whose bad-challenge functions are not efficiently computable.
> 
> As a corollary (following Choudhuri et al., ePrint 2019 and Ephraim et al., EUROCRYPT 2020), we construct hard-on-average problems in the complexity class \(\mathbf {CLS}\subset \mathbf {PPAD}\) under the \(2^{\lambda ^\epsilon }\)-hardness of the repeated squaring problem and the \(2^{-n^{1-\epsilon }}\)-hardness of the learning with errors problem. Under the additional assumption that the repeated squaring problem is “inherently sequential”, we also obtain a Verifiable Delay Function (Boneh et al., EUROCRYPT 2018) in the standard model. Finally, we give additional PPAD-hardness and VDF instantiations demonstrating a broader tradeoff between the strength of the repeated squaring assumption and the strength of the lattice assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_22](https://doi.org/10.1007/978-3-030-56877-1_22)
## Delegation with Updatable Unambiguous Proofs and PPAD-Hardness.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#delegation-with-updatable-unambiguous-proofs-and-ppad-hardness)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#delegation-with-updatable-unambiguous-proofs-and-ppad-hardness)
### Authors
* Yael Tauman Kalai, Microsoft Research, Cambridge, USA
* Omer Paneth, Tel Aviv University, Tel Aviv, Israel
* Yael Tauman Kalai, MIT, Cambridge, USA
* Lisa Yang, MIT, Cambridge, USA
### Abstract
> In this work, we construct an updatable and unambiguous delegation scheme based on the decisional assumption on bilinear groups introduced by Kalai, Paneth and Yang [STOC 2019]. Using this delegation scheme, we show PPAD-hardness (and hence the hardness of computing Nash equilibria) based on the quasi-polynomial hardness of this bilinear group assumption and any hard language that is decidable in quasi-polynomial time and polynomial space.
> 
> The delegation scheme is for super-polynomial time deterministic computations and is publicly verifiable and non-interactive in the common reference string (CRS) model. It is updatable meaning that given a proof for the statement that a Turing machine reaches some configuration C in T steps, it is efficient to update it into a proof for the statement that the machine reaches the next configuration \(C'\) in \(T+1\) steps. It is unambiguous meaning that it is hard to find two different proofs for the same statement.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_23](https://doi.org/10.1007/978-3-030-56877-1_23)
## New Techniques for Zero-Knowledge: Leveraging Inefficient Provers to Reduce Assumptions, Interaction, and Trust.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#new-techniques-for-zero-knowledge-leveraging-inefficient-provers-to-reduce-assumptions-interaction-and-trust)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#new-techniques-for-zero-knowledge-leveraging-inefficient-provers-to-reduce-assumptions-interaction-and-trust)
### Authors
* Marshall Ball, Columbia University, New York City, USA
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Mukul Kulkarni, University of Massachusetts, Amherst, USA
### Abstract
> We present a transformation from NIZK with inefficient provers in the uniform random string (URS) model to ZAPs (two message witness indistinguishable proofs) with inefficient provers. While such a transformation was known for the case where the prover is efficient, the security proof breaks down if the prover is inefficient. Our transformation is obtained via new applications of Nisan-Wigderson designs, a combinatorial object originally introduced in the derandomization literature.
> 
> We observe that our transformation is applicable both in the setting of super-polynomial provers/poly-time adversaries, as well as a new fine-grained setting, where the prover is polynomial time and the verifier/simulator/zero knowledge distinguisher are in a lower complexity class, such as \(\mathsf {NC}^1\). We also present \(\mathsf {NC}^1\)-fine-grained NIZK in the URS model for all of \(\mathsf {NP}\) from the worst-case assumption \(\oplus L/\mathrm {poly}\not \subseteq \mathsf {NC}^1\).
> 
> Our techniques yield the following applications:
> 
> 1. ZAPs for \(\mathsf {AM}\) from Minicrypt assumptions (with super-polynomial time provers),
> 
> 2. \(\mathsf {NC}^1\)-fine-grained ZAPs for \(\mathsf {NP}\) from worst-case assumptions,
> 
> 3. Protocols achieving an “offline” notion of NIZK (oNIZK) in the standard (no-CRS) model with uniform soundness in both the super-polynomial setting (from Minicrypt assumptions) and the \(\mathsf {NC}^1\)-fine-grained setting (from worst-case assumptions). The oNIZK notion is sufficient for use in indistinguishability-based proofs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_24](https://doi.org/10.1007/978-3-030-56877-1_24)
## Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#spartan-efficient-and-general-purpose-zksnarks-without-trusted-setup)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#spartan-efficient-and-general-purpose-zksnarks-without-trusted-setup)
### Authors
* Srinath Setty, Microsoft Research, Redmond, USA
### Abstract
> This paper introduces Spartan, a new family of zero-knowledge succinct non-interactive arguments of knowledge (zkSNARKs) for the rank-1 constraint satisfiability (R1CS), an NP-complete language that generalizes arithmetic circuit satisfiability. A distinctive feature of Spartan is that it offers the first zkSNARKs without trusted setup (i.e., transparent zkSNARKs) for NP where verifying a proof incurs sub-linear costs—without requiring uniformity in the NP statement’s structure. Furthermore, Spartan offers zkSNARKs with a time-optimal prover, a property that has remained elusive for nearly all zkSNARKs in the literature.
> 
> To achieve these results, we introduce new techniques that we compose with the sum-check protocol, a seminal interactive proof protocol: (1) computation commitments, a primitive to create a succinct commitment to a description of a computation; this technique is crucial for a verifier to achieve sub-linear costs after investing a one-time, public computation to preprocess a given NP statement; (2) spark, a cryptographic compiler to transform any existing extractable polynomial commitment scheme for multilinear polynomials to one that efficiently handles sparse multilinear polynomials; this technique is critical for achieving a time-optimal prover; and (3) a compact encoding of an R1CS instance as a low-degree polynomial. The end result is a public-coin succinct interactive argument of knowledge for NP (which can be viewed as a succinct variant of the sum-check protocol); we transform it into a zkSNARK using prior techniques. By applying spark to different commitment schemes, we obtain several zkSNARKs where the verifier’s costs and the proof size range from \(O(\log ^2{n})\) to \(O(\sqrt{n})\) depending on the underlying commitment scheme (n denotes the size of the NP statement). These schemes do not require a trusted setup except for one that requires a universal trusted setup.
> 
> We implement Spartan as a library in about 8,000 lines of Rust. We use the library to build a transparent zkSNARK in the random oracle model where security holds under the discrete logarithm assumption. We experimentally evaluate it and compare with recent zkSNARKs for R1CS instance sizes up to \(2^{20}\) constraints. Among schemes without trusted setup, Spartan offers the fastest prover with speedups of 36–\(152{\times }\) depending on the baseline, produces proofs that are shorter by 1.2–416\({\times }\), and incurs the lowest verification times with speedups of 3.6–1326\({\times }\). When compared to the state-of-the-art zkSNARK with trusted setup, Spartan ’s prover is \(2{\times }\) faster for arbitrary R1CS instances and \(16{\times }\) faster for data-parallel workloads.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_25](https://doi.org/10.1007/978-3-030-56877-1_25)
## NIZK from LPN and Trapdoor Hash via Correlation Intractability for Approximable Relations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#nizk-from-lpn-and-trapdoor-hash-via-correlation-intractability-for-approximable-relations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#nizk-from-lpn-and-trapdoor-hash-via-correlation-intractability-for-approximable-relations)
### Authors
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Venkata Koppula, Weizmann Institute of Science, Rehovot, Israel
* Tamer Mour, Weizmann Institute of Science, Rehovot, Israel
### Abstract
> We present new non-interactive zero-knowledge argument systems (NIZK), based on standard assumptions that were previously not known to imply it. In particular, we rely on the hardness of both the learning parity with noise (LPN) assumption, and the existence of trapdoor hash functions (TDH, defined by Döttling et al., Crypto 2019). Such TDH can be based on a number of standard assumptions, including DDH, QR, DCR, and LWE.
> 
> We revisit the correlation intractability (CI) framework for converting \(\varSigma \)-protocols into NIZK, and present a different strategy for instantiating it by putting together two new components. First, while prior works considered the search-complexity of the relations for which CI is sought, we consider their probabilistic representation. Namely, a distribution over lower-complexity functions that bitwise-computes the target function with all but small (constant) probability. The second component is a new perspective for quantifying the class of relations for which CI is achieved. We show that it is instructive to consider CI for approximable relations (CI-Apx) which is quantified by a class of relations, but requires CI to hold against any approximation of any relation in this class.
> 
> We show that CI-Apx for just constant-degree polynomials suffices for NIZK, if the underlying \(\varSigma \)-protocol is implemented using a suitable commitment scheme. We show that such a commitment scheme can be constructed based on low noise LPN. We then show how to construct CI-Apx for constant-degree polynomials from any suitable TDH (with an enhanced correctness property that is satisfied by all existing TDH constructions).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_26](https://doi.org/10.1007/978-3-030-56877-1_26)
## Shorter Non-interactive Zero-Knowledge Arguments and ZAPs for Algebraic Languages.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#shorter-non-interactive-zero-knowledge-arguments-and-zaps-for-algebraic-languages)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#shorter-non-interactive-zero-knowledge-arguments-and-zaps-for-algebraic-languages)
### Authors
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Dominik Hartmann, Ruhr-University Bochum, Bochum, Germany
### Abstract
> We put forth a new framework for building pairing-based non-interactive zero-knowledge (\(\mathsf {NIZK}\)) arguments for a wide class of algebraic languages, which are an extension of linear languages, containing disjunctions of linear languages and more. Our approach differs from the Groth-Sahai methodology, in that we rely on pairings to compile a \(\varSigma \)-protocol into a \(\mathsf {NIZK}\). Our framework enjoys a number of interesting features:
> 
> conceptual simplicity, parameters derive from the \(\varSigma \)-protocol;
> 
> proofs as short as resulting from the Fiat-Shamir heuristic applied to the underlying \(\varSigma \)-protocol;
> 
> fully adaptive soundness and perfect zero-knowledge in the common random string model with a single random group element as CRS;
> 
> yields simple and efficient two-round, public coin, publicly-verifiable perfect witness-indistinguishable (WI) arguments(ZAPs) in the plain model. To our knowledge, this is the first construction of two-rounds statistical witness-indistinguishable arguments from pairing assumptions.
> 
> Our proof system relies on a new (static, falsifiable) assumption over pairing groups which generalizes the standard kernel Diffie-Hellman assumption in a natural way and holds in the generic group model (GGM) and in the algebraic group model (AGM).
> 
> Replacing Groth-Sahai \(\textsf {NIZKs}\) with our new proof system allows to improve several important cryptographic primitives. In particular, we obtain the shortest tightly-secure structure-preserving signature scheme (which are a core component in anonymous credentials), the shortest tightly-secure quasi-adaptive \(\mathsf {NIZK}\) with unbounded simulation soundness (which in turns implies the shortest tightly-mCCA-secure cryptosystem), and shorter ring signatures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_27](https://doi.org/10.1007/978-3-030-56877-1_27)
## Non-interactive Zero-Knowledge Arguments for QMA, with Preprocessing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-3].md#non-interactive-zero-knowledge-arguments-for-qma-with-preprocessing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#non-interactive-zero-knowledge-arguments-for-qma-with-preprocessing)
### Authors
* Andrea Coladangelo, Computing and Mathematical Sciences, Caltech, Pasadena, USA
* Thomas Vidick, Computing and Mathematical Sciences, Caltech, Pasadena, USA
* Tina Zhang, Computing and Mathematical Sciences, Caltech, Pasadena, USA
### Abstract
> A non-interactive zero-knowledge (NIZK) proof system for a language \(L\in \text {NP} \) allows a prover (who is provided with an instance \(x \in L\), and a witness w for x) to compute a classical certificate \(\pi \) for the claim that \(x\in L\) such that \(\pi \) has the following properties: 1) \(\pi \) can be verified efficiently, and 2) \(\pi \) does not reveal any information about w, besides the fact that it exists (i.e. that \(x \in L\)). NIZK proof systems have recently been shown to exist for all languages in \(\text {NP} \) in the common reference string (CRS) model and under the learning with errors (LWE) assumption.
> 
> We initiate the study of NIZK arguments for languages in \(\text {QMA} \). An argument system differs from a proof system in that the honest prover must be efficient, and that it is only sound against (quantum) polynomial-time provers. Our first main result is the following: if LWE is hard for quantum computers, then any language in \(\text {QMA} \) has an NIZK argument with preprocessing. The preprocessing in our argument system consists of (i) the generation of a CRS and (ii) a single (instance-independent) quantum message from verifier to prover. The instance-dependent phase of our argument system, meanwhile, involves only a single classical message from prover to verifier. Importantly, verification in our protocol is entirely classical, and the verifier needs not have quantum memory; its only quantum actions are in the preprocessing phase. NIZK proofs of (classical) knowledge are widely used in the construction of more advanced cryptographic protocols, and we expect the quantum analogue to likewise find a broad range of applications. In this respect, the fact that our protocol has an entirely classical verification phase is particularly appealing.
> 
> Our second contribution is to extend the notion of a classical proof of knowledge to the quantum setting. We introduce the notions of arguments and proofs of quantum knowledge (AoQK/PoQK), and we show that our non-interactive argument system satisfies the definition of an AoQK, which extends its domain of usefulness with respect to cryptographic applications. In particular, we explicitly construct an extractor which can recover a quantum witness from any prover who is successful in our protocol. We also show that any language in QMA has an (interactive) proof of quantum knowledge, again by exhibiting a particular proof system for all languages in QMA and constructing an extractor for it.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_28](https://doi.org/10.1007/978-3-030-56877-1_28)
